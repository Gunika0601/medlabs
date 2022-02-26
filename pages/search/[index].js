import React from "react";
import InputHero from "../../components/InputHero";
import Search from "../../components/Search/index";

const index = ({ data }) => {
  return (
    <>
      <InputHero />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Search data={data} />
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const req = context;

  const id = req.params.index;
  const res = await fetch(
    `https://medlabs-backend.herokuapp.com/search/${id}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data,
    },
  };
}
