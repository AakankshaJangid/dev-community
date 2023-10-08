import Image from "next/image";
import React from "react";
import Search from "../search/page";

const Home = () => {
  return (
    <div>
      <div className="w-full max-w-4xl">
        <h1 className="text-left font-bold text-2xl">
          Blogs
        </h1>
        <section className="mt-9 flex flex-col gap-10 ml-24">
          <article className="flex w-full flex-col rounded-xl bg-indigo-950 p-7 pr-72">
            <div className="flex items-start justify-between">
              <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                  <Image src="/user-3-fill.png" height={15} width={20} />
                  <h1 className="text-lg">Anshika</h1>
                </div>

                <div className="flex w-full flex-col">
                  <p className="mt-2 text-small-regular text-light-2 relative left-20">
                    Welcome to the blog page !
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex gap-3.5 relative left-32">
                      <Image
                        src="/heart-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/chat-1-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-forward-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col rounded-xl bg-indigo-950 p-7">
            <div className="flex items-start justify-between">
              <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                  <Image src="/user-3-fill.png" height={15} width={20} />
                  <h1 className="text-lg">Gitisha</h1>
                </div>

                <div className=" w-full">
                  <p className="mt-2 text-small-regular text-light-2 relative left-20">
                    Welcome to the blog page !
                  </p>
                  <div className="mt-5 flex  gap-3">
                    <div className="flex gap-3.5 relative left-32">
                      <Image
                        src="/heart-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/chat-1-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-forward-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col rounded-xl bg-indigo-950 p-7">
            <div className="flex items-start justify-between">
              <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                  <Image src="/user-3-fill.png" height={15} width={20} />
                  <h1 className="text-lg">Aakanksha</h1>
                </div>

                <div className="flex w-full flex-col">
                  <p className="mt-2 text-small-regular text-light-2 relative left-20">
                    Welcome to the blog page !
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex gap-3.5 relative left-32">
                      <Image
                        src="/heart-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/chat-1-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-forward-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="flex w-full flex-col rounded-xl bg-indigo-950 p-7">
            <div className="flex items-start justify-between">
              <div className="flex w-full flex-1 flex-row gap-4">
                <div className="flex flex-col items-center">
                  <Image src="/user-3-fill.png" height={15} width={20} />
                  <h1 className="text-lg">Aanchal</h1>
                </div>

                <div className="flex w-full flex-col">
                  <p className="mt-2 text-small-regular text-light-2 relative left-20">
                    Welcome to the blog page !
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex gap-3.5 relative left-32">
                      <Image
                        src="/heart-line.png"
                        height={20}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/chat-1-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-forward-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                      <Image
                        src="/share-line.png"
                        height={10}
                        width={15}
                        alt="like"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Home;
