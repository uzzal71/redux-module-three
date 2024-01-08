import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />
            

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <Header />
                
                <hr class="mt-4" />

                {/* todo list */}
                <div
                    class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
                >
                    {/* todo */}
                    <div
                        class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
                    >
                        <div
                            class="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
                        >
                            <input
                                type="checkbox"
                                class="opacity-0 absolute rounded-full"
                            />
                            <svg
                                class="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        </div>

                        <div class="select-none flex-1 line-through">
                            Learn React from Learn with Sumit YouTube Channel
                        </div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
                        ></div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
                        ></div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
                        ></div>

                        <img
                            src="./images/cancel.png"
                            class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                            alt="Cancel"
                        />
                    </div>

                    {/* todo */}
                    <div
                        class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
                    >
                        <div
                            class="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
                        >
                            <input
                                type="checkbox"
                                class="opacity-0 absolute rounded-full"
                            />
                            <svg
                                class="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        </div>

                        <div class="select-none flex-1">
                            Learn Redux from Think in a Redux way course
                        </div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
                        ></div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
                        ></div>

                        <div
                            class="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
                        ></div>

                        <img
                            src="./images/cancel.png"
                            class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                            alt="Cancel"
                        />
                    </div>
                </div>

                <hr class="mt-4" />

                {/* footer */}
                <div class="mt-4 flex justify-between text-xs text-gray-500">
                    <p>2 tasks left</p>
                    <ul class="flex space-x-1 items-center text-xs">
                        <li class="cursor-pointer font-bold">All</li>
                        <li>|</li>
                        <li class="cursor-pointer">Incomplete</li>
                        <li>|</li>
                        <li class="cursor-pointer">Complete</li>
                        <li></li>
                        <li></li>
                        <li
                            class="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                        ></li>
                        <li
                            class="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                        ></li>
                        <li
                            class="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                        ></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default App
