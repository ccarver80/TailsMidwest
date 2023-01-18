import React from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../common/Modal";
import Image from "next/image";
import { Select } from "../../common/Select";
import TextInput from "../../common/TextInput";
import { TextArea } from "../../common/TextArea";
import Radio from "../../common/Radio";
import logo from "../../../public/imgs/logoText.png";
import { states } from "../../constants";
import { numbers } from "../../constants";
import styles from "./styles.module.css";

export function AdoptModal({ isOpen, closeModal }) {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
              {/* ========================================================================================================================== */}
              <div className="flex flex-col col-span-2 gap-y-5">
                <Select
                  options={states}
                  register={register}
                  label="What is the name of the animal you would like to adopt?"
                  name="selected_animal"
                />

                <Select
                  options={numbers}
                  register={register}
                  label="How many people reside in your home?"
                  name="residents"
                />

                <Select
                  options={numbers}
                  register={register}
                  label="How many residents are OVER 21 years old"
                  name="residents_21Over"
                />

                <Select
                  options={numbers}
                  register={register}
                  label="How many residents are UNDER 21 years old"
                  name="residents_21Under"
                />

                <TextArea
                  rows="2"
                  register={register}
                  name="children_count"
                  label="What are the ages of the children in the household? "
                  placeholder="6, 3, and 4 months old"
                />

                <h4 className="mx-auto mb-2 text-1xl">
                  What type of home do you live in?
                </h4>
                <div className="flex flex-row">
                  <Radio
                    register={register}
                    name="type_of_home"
                    value="house"
                    lable="House"
                  />
                  <Radio
                    register={register}
                    name="type_of_home"
                    value="apartment"
                    lable="Apartment"
                  />

                  <Radio
                    register={register}
                    name="type_of_home"
                    value="condo"
                    lable="Condo"
                  />
                  <Radio
                    register={register}
                    name="type_of_home"
                    value="twin-home"
                    lable="Twin Home"
                  />
                </div>

                <Select
                  options={[
                    { name: "Yes", value: "yes" },
                    { name: "No", value: "no" },
                  ]}
                  register={register}
                  name="home_yard"
                  label="Does your home have a yard?"
                />

                <TextArea
                  label="If yes, please tell us the material and height of the fence."
                  register={register}
                  name="fence"
                  placeholder="Wooden picket fence 6 feet high"
                />

                <Select
                  options={[
                    { name: "Own", value: "own" },
                    { name: "Lease", value: "lease" },
                    { name: "Rent", value: "rent" },
                  ]}
                  register={register}
                  name="ownOrLease"
                  label="Do you?"
                />

                <TextArea
                  rows="2"
                  placeholder="Greg Johnson, 701-222-3456, Cottonwood Apartments"
                  register={register}
                  label="If you are renting, please provide your landlord's name and phone number"
                  name="landlord_info"
                />

                {/* ========================================================================================================== */}

                <TextArea
                  rows="5"
                  label="Please list all current pets owned"
                  register={register}
                  placeholder="Include type of animal, breed (if know), age, gender, and if they were spayed/neutered: "
                  name="current_pets"
                />

                <TextArea
                  rows="3"
                  label=" If applicable, who is your current veterinarian and their phone number: "
                  register={register}
                  placeholder="Joe at High Plains vet, 701-222-1234"
                  name="current_vet"
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
