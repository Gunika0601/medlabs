/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Cards from "../../components/Dashboard/Cards";
import ModalLab from "../../components/Dashboard/ModalLab";
import Modal from "react-modal";
import useLocalStorage from "../../hooks/useLocalStorage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps(context) {
  const req = context;

  const id = req.params.index;
  const res = await fetch(
    `https://medlabs-backend.herokuapp.com/getalltest/${id}`
  );
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}

export default function Example({ data }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [labId, setLabId] = React.useState();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const[userData] = useLocalStorage("user")
  const rediretHandler=()=>{
    router.push(`/testdetails/${userData.labId}`)
  }
  const router = useRouter();
 
  useEffect(() => {
    const reqId = router?.query?.index;
    setLabId(reqId);
  }, [router.query.index]);

  return (
    <>
      {/* MODAL STARTS HERE */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalLab closeModal={closeModal} labId={labId} />
        {/* MODAL ENDS HERE */}
      </Modal>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <button
              type="button"
              data-modal-toggle="defaultModal"
              onClick={openModal}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add a Test
              </span>
            </button>
            <button
              type="button"
              data-modal-toggle="defaultModal"
              onClick={rediretHandler}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Patient Details
              </span>
            </button>
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg">
                <Cards data={data} />
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
