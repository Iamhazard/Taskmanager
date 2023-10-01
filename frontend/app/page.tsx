//import Image from 'next/image'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {TaskList} from "../components/index";

export const URL=process.env.REACT_APP_SERVER_URL;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
  <TaskList/>
  </div>
  <ToastContainer />
    </main>
  )
}
