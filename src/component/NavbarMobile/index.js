import { useRouter } from "next/router";

const ItemMenuMail = () => {
  return (
    <div className="bg-white rounded-full p-4 -translate-y-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-mailbox"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
        <path d="M12 11v-8h4l2 2l-2 2h-4" />
        <path d="M6 15h1" />
      </svg>
    </div>
  );
};
const NavbarMobile = () => {
  const router = useRouter();
  return (
    <div className="w-full ">
      <div className="z-50 w-full backdrop-blur-md py-2 rounded-md px-4 border-gray-300 border-solid border hidden md:block fixed bottom-0">
        <div className="flex justify-between items-center align-middle">
          <div
            onClick={() => {
              router.push("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </div>
          <div
            onClick={() => {
              router.push("/about");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
          <div className="relative">
            <ItemMenuMail />
          </div>
          <div
            onClick={() => {
              router.push("/project");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-factory-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21h18" />
              <path d="M5 21v-12l5 4v-4l5 4h4" />
              <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
              <path d="M9 17h1" />
              <path d="M14 17h1" />
            </svg>
          </div>
          <div
            onClick={() => {
              router.push("/articles");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-blockquote"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 15h15" />
              <path d="M21 19h-15" />
              <path d="M15 11h6" />
              <path d="M21 7h-6" />
              <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
              <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarMobile;
