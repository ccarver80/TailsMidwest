import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logo from "../../public/imgs/logoText.png";
import { Header } from "../../components";
import styles from "../../styles/Foster.module.css";
import TextInput from "../../components/common/TextInput";

export default function Foster() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.foster}>
      <Header />

      <div className={styles.foster__header}>
        <Image src={logo} />
        <h1>Foster Application</h1>
      </div>

      <div className={styles.foster__description}>
        <h2>
          To qualify as a foster for Tails of the Midwest Rescue you must:
        </h2>

        <ul>
          <li>Be at least 21-years of age</li>
          <li>If you rent, you must have consent from your landlord.</li>
          <li>
            All animals in your home must be spayed/neutered if they are 6
            months or older, unless there are medical reasons for not doing so.
          </li>
          <li>All animals in the home must be up to date with vaccinations.</li>
          <li>
            Agree to have a home visit done by a Tails of the Midwest Rescue
            representative.
          </li>
          <li>
            Agree to have the animal wear a Tails of the Midwest Rescue ID tag
            on its collar at all times when it public or outdoors.
          </li>
          <li>
            Agree to never allow the foster animal to be off leash when it’s
            outdoors, unless it is in a securely fenced in area.
          </li>
          <li>
            Agree to have the foster animal reside in the home, not outside. The
            foster animal may not be left outdoors when you are not at home.
            This includes outdoor kennel runs.
          </li>
          <li>
            Agree to never allow foster dog to be left unattended with young
            children.
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.foster__form}>
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
          <TextInput
            lable="State/Province"
            register={register}
            name="state"
            placeholder="North Dakota"
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

          <TextInput
            lable="Applicants Phone:"
            register={register}
            name="phone"
            placeholder="111-222-3456"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />

          <TextInput
            lable="Co-Applicants Phone:"
            register={register}
            name="co_phone"
            placeholder="111-222-3456"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
