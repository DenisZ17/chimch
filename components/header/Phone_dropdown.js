import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faPhone,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

function Phone_dropdown() {
  const [phonen, setPhone] = useState(false);

  return (
    <div className="header__phone-flex">
      <span style={{ marginRight: "10px" }}>
        <FontAwesomeIcon
          icon={faPhone}
          rotation={90}
          color={"#1176bc"}
          size={"1x"}
        />
      </span>
      <button
        onClick={() => setPhone(!phonen)}
        className="text-dark font-medium text-base text-center inline-flex items-center"
        type="button"
      >
        +38 (066) 681-24-22
        <span style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon
            icon={phonen ? faAngleUp : faAngleDown}
            color={"#000"}
            size={"1x"}
          />
        </span>
      </button>

      <div className={phonen ? "phone_dropdown" : "phone_dropdownactive"}>
        <ul className="py-1">
          <li>
            <a
              href="tel:+38 (068) 168-35-11"
              className="block py-2 font-medium px-2 text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              +38 (068) 168-35-11
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="tel:+38 (063) 655-30-72"
            className="block py-2 px-2 font-medium text-base text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            +38 (063) 655-30-72
          </a>
        </div>
      </div>
    </div>
  );
}

export default Phone_dropdown;
