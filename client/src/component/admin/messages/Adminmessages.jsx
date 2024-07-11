import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Adminmessages() {
  const [messages, setmessages] = useState(null);
  const [success, setsuccess] = useState(false);
  const [loading, setloading] = useState(false);

  const fetchMessages = async () => {
    try {
      setloading(true);

      const { data } = await axios.get("http://localhost:4000/api/v1/messages");

      if (data.success) {
        console.log(data);
        setmessages(data.messages);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  const handleDeleteMessage = async (id) => {
    console.log(id);
    try {
      toast.loading("Delting message");
      
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/messages/${id}`
      );

      toast.dismiss();
      if (data.success) {
        console.log(data);
        toast.success("Message deleted successfully");
        setsuccess(true);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Message delition failed.");
      console.log(error.message);
      setsuccess(false);
    } finally {
      
      setloading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    if (success) {
      setsuccess(false);
    }
  }, [success]);

  return (
    <>
      {!loading && (
        <>
          {messages && (
            <>
              <section class="w-full ">
                <div class="container mx-auto">
                  <div class=" text-center">
                    <h1 class="block antialiased tracking-normal font-sans font-semibold text-blue-gray-900 mb-4 text-3xl !leading-snug lg:text-4xl">
                      Users Messages
                    </h1>
                  </div>
                  <div class="mx-auto w-full space-y-7">
                    {/* Faq */}

                    {messages.map((m) => {
                      return (
                        <div class="block relative w-full">
                          <button
                            type="button"
                            onClick={(e) => {
                              console.log("HIIII");
                              const siblingDiv =
                                e.currentTarget.nextElementSibling;
                              siblingDiv.style.height =
                                siblingDiv.clientHeight === 0 ? "100%" : "0";
                            }}
                            onMouseEnter={(e) => {
                              const siblingDiv =
                                e.currentTarget.nextElementSibling;
                              siblingDiv.style.height =
                                siblingDiv.clientHeight === 0 ? "100%" : "0";
                            }}
                            onMouseLeave={(e) => {
                              const siblingDiv =
                                e.currentTarget.nextElementSibling;
                              siblingDiv.style.height =
                                siblingDiv.clientHeight === 0 ? "100%" : "0";
                            }}
                            class="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors text-left text-gray-900"
                          >
                            <div className="space-x-2">
                              <span className="md:border-r-2 pr-3 border-black">
                                {m.name}
                              </span>
                              <a
                                className="hidden md:inline underline"
                                href={`mailto:${m.email}`}
                              >
                                {m.email}
                              </a>
                            </div>

                            <span className="space-x-2 pr-3">
                              <span className="px-2  text-sm">
                                {m.createdAt.substring(0, 10)}
                              </span>
                              <button
                                className="underline text-sm text-red-500"
                                onClick={() => {
                                  handleDeleteMessage(m._id);
                                }}
                              >
                                delete
                              </button>
                            </span>
                          </button>
                          <div
                            class="overflow-hidden h-0"
                            data-projection-id="7"
                          >
                            <div
                              class="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                              data-projection-id="8"
                            >
                              <a
                                className="block md:hidden text-center underline"
                                href={`mailto:${m.email}`}
                              >
                                {m.email}
                              </a>

                              <p class="block antialiased font-sans text-base leading-relaxed font-normal text-gray-500">
                                {m.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Adminmessages;
