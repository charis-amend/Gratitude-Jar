// import { csrfToken, getServerSession, getSession } from "next-auth";
// import React from "react"

// export default function SignIn({ csrfToken }) {
//     return (
//         <>
//             <Head>
//                 <title>🫙 Gratitude Jar</title>
//             </Head>
//             <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}

//                 <div className="viewbox z-10 top-18 m-3 my-60 p-3 right-5 left-5 fixed h-55 w-200 place-self-center flex flex-col items-center justify-between bg-slate-500/80 rounded-md shadow-white shadow-sm">

//                     <form method="post" action="/api/auth/signin/email"
//                         className="form w-full max-w-sm"
//                     >
//                         {/* hidden: */}
//                         <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

//                         <div className="flex items-center border-b border-white py-2 bg-transparent">
//                             <label htmlFor="email">
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     placeholder="Enter your E-Mail, please."
//                                     required
//                                     className="input appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
//                                 />
//                             </label>
//                             <button
//                                 type="submit"
//                                 className="submit-button flex-shrink-0 bg-transparent hover:bg-gray-80 text-sm text-white py-1 px-2 rounded shadow">
//                                 Sign in with Email
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// // Define the getServerSideProps function for server-side rendering
// SignIn.getInitialProps = async (context) => {
//     const { req, res } = context
//     const session = await getServerSession({ req })

//     if (session && res && session.accessToken) {
//         res.writeHead(302, {
//             Location: "/",
//         })
//         res.end()
//         return;
//     }
//     return {
//         session: undefined,
//         csrfToken: await csrfToken(context)
//     }
// }