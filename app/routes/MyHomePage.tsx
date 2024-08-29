import Foolter from "./template/footer";
export default function MyHomePage() {
    return (
        <div className="font-sans p-4">
            
                <h1 className="text-3xl">ชื่อ-นามสกุล: ดวงหทัย ยะรังไพ </h1> <br />
                <h1 className="text-3xl">E-mail:duanghathai.yar@rmutto.ac.th </h1> <br />
                <h1 className="text-3xl">Line ID: 000-000-0000 </h1> <br />
                <img src="img/01.jpg" alt="ดวงหทัย ยะรังไพ" /> <br /> <br />
                <a href="/" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">กลับหน้าหลัก</a>
            
        </div>
    );
}