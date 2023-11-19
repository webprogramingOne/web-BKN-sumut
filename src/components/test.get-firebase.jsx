import { useState, useEffect } from "react";

import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

const FromDb = () => {
  const [galeri, setUsers] = useState([]);
  const [category, setCategory] = useState("tenda");
  const onChaneCategory = (e) => {
    if (e.target.value !== null) {
      setCategory(e.target.value);

      console.log(category);
    }
  };
  const userCollectionRef = collection(db, "galeri");
  const [cek, setCek] = useState([]);
  const cekColRef = collection(db, `${category}`);

  const getCek = async () => {
    const datas = await getDocs(cekColRef);
    setCek(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);
  return (
    <div className="bg-violet-200">
      <div>
        <select
          type="email"
          className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
          placeholder="jhondoe@gmail.com"
          name="kategory"
          id="kategory"
          value={category}
          onChange={onChaneCategory}
          onClick={getCek()}
        >
          <option value="tenda">Tenda</option>
          <option value="hena">Hena</option>
          <option value="dekorasi">Dekorasi</option>
          <option value="photography">Photografi</option>
        </select>
      </div>
      <h1>test</h1>
      {cek.map((user) => {
        console.log(user);
        return (
          <div key={user.id}>
            <h1>name: {user.type}</h1>
            <img src={user.img} width={30} alt="" />
            <p>{user.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FromDb;
