import { Modal } from "./UI/Modal.js";
import { Map } from "./UI/Map.js";
import {
  getCoordsFromAddress,
  getAddressFromCoords,
} from "./Utility/Location.js";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");
    this.shareBtn = document.getElementById("share-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener("click", this.sharePlaceHandler);
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    const shareLinkInputEl = document.getElementById("share-link");
    if (!navigator.clipboard) {
      shareLinkInputEl.select();
      return;
    }

    navigator.clipboard
      .writeText(shareLinkInputEl.value)
      .then(() => {
        alert("Copied into clipboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    fetch("http://localhost:3000/add-location", {
      method: "POST",
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const locationId = data.locId;
        this.shareBtn.disabled = false;
        const shareLinkInputEl = document.getElementById("share-link");
        shareLinkInputEl.value = `${location.origin
          }/my-place?location=${locationId}`;
      });
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser, please use modern browser."
      );
      return;
    }

    const modal = new Modal(
      "loading-modal-content",
      "Loading location, please wait!!"
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace(coordinates, address);
        console.log(coordinates);
      },
      (error) => {
        modal.hide();
        alert(
          "Could not locate you unfortunately, please update address anually! "
        );
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector("input").value;
    if (!address || address.trim().length === 0) {
      alert("Invalid address entered - please try again");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location, please wait!!"
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

new PlaceFinder();
