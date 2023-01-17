import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../common/Modal";
import Image from "next/image";
import { Select } from "../../common/Select";
import TextInput from "../../common/TextInput";
import logo from "../../../public/imgs/logoText.png";
import { states } from "../../constants";
import { numbers } from "../../constants";
import styles from "./styles.module.css";

export function AdoptModal({ isOpen, closeModal }) {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(states);

  return (
    <Modal maxWidth="1200px" isModalOpen={isOpen} closeModal={closeModal}>
      <>
        <div className={styles.adopt}>
          <div className={styles.adopt__header}>
            <Image src={logo} />
            <h1>Adopt Application</h1>
          </div>

          <div className={styles.adopt__description}>
            <h2>
              To qualify for adoption from Tails of the Midwest Rescue you must:
            </h2>

            <ul>
              <li>* Be at least 21-years of age</li>
              <li>
                * Be willing and able to spend the time and money necessary to
                care for a new pet. Including but not limited to medical
                treatment, nourishment, care and training
              </li>
              <li>* Have consent from a landlord if applicable</li>
              <li>* Cannot have a previous animal cruelty conviction</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.adopt__form}>
              <h3 className="col-span-2">Applicant Info:</h3>
              <TextInput
                lable="Applicants First Name:"
                register={register}
                name="first_name"
                placeholder="Bob"
              />

              <TextInput
                lable="Applicants Last Name:"
                register={register}
                name="last_name"
                placeholder="Smith"
              />
              <div className="col-span-2 ">
                <TextInput
                  lable="Email:"
                  register={register}
                  name="email"
                  type="email"
                  placeholder="bob_smith@email.com"
                />
              </div>

              <div className="col-span-2 ">
                <TextInput
                  lable="Applicant's Address 1:"
                  register={register}
                  name="address_1"
                  placeholder="123 Apple St"
                />
              </div>

              <div className="col-span-2 ">
                <TextInput
                  lable="Applicant's Address 2:"
                  register={register}
                  name="address_2"
                  placeholder="Apt #123"
                />
              </div>

              <TextInput
                lable="City"
                register={register}
                name="city"
                placeholder="Bismarck"
              />
              <Select
                label="State/Province"
                register={register}
                options={states}
                name="state"
              />

              <TextInput
                lable="Zip Code"
                register={register}
                name="zip_code"
                placeholder="58504"
              />

              <TextInput
                lable="Country"
                register={register}
                name="country"
                placeholder="United States"
              />

              <div className="col-span-2">
                <TextInput
                  lable="Applicants Phone:"
                  register={register}
                  name="phone"
                  placeholder="111-222-3456"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>
              <h3 className="col-span-2">Co Applicant Info:</h3>
              <TextInput
                register={register}
                lable="Co-Applicants First Name:"
                name="co_app_first_name"
                placeholder="Jane"
              />

              <TextInput
                register={register}
                lable="Co-Applicants Last Name:"
                name="co_app_last_name"
                placeholder="Smith"
              />

              <div className="col-span-2 ">
                <TextInput
                  lable="Co-Applicant's Email:"
                  register={register}
                  name="co_email"
                  type="email"
                  placeholder="jane_smith@email.com"
                />
              </div>
              <div className="col-span-2">
                <TextInput
                  lable="Co-Applicants Phone:"
                  register={register}
                  name="co_phone"
                  placeholder="111-222-3456"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>

              <Select
                options={states}
                register={register}
                label="Please Pick"
              />

              <div className="col-span-2">
                <Select
                  options={numbers}
                  register={register}
                  label="How many people reside in your home?"
                />
              </div>

              <button type="submit">sub</button>
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
}
