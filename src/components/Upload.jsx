import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
const Upload = () => {
  const [newType, setType] = useState();
  const [newDesc, setDesc] = useState("");

  // const onChangeCol = (e) => {
  //   if (e.target.value !== null) {
  //     setCollection(e.target.value);
  //   }
  // };
  const [category, setCategory] = useState("null");
  const onChaneCategory = (e) => {
    if (e.target.value !== null) {
      setCategory(e.target.value);
    }
  };
  const usersCollectionRef = collection(db, `${category}`);
  const navigate = useNavigate();
  const [picture, setPicture] = useState(null);
  const [image, setImage] = useState("");
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      desc: newDesc,
      type: newType,
      img: image,
    });
  };

  // const onChangePicture = (e) => {
  //   if (e.target.files.length !== 0) {
  //     setPicture(e.target.files[0]);
  //     console.log("picture: ", picture);
  //   }
  // };
  useEffect(() => {
    const uploadImage = () => {
      const name = new Date().getTime() + picture.name;
      console.log(name);
      const storageRef = ref(storage, picture.name);

      const uploadTask = uploadBytesResumable(storageRef, picture);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImage(downloadURL);
          });
        }
      );
    };
    picture && uploadImage();
  }, [picture]);

  const onChangeType = (e) => {
    if (e.target.value !== null) {
      setType(e.target.value);
    }
  };
  const save = (event) => {
    event.preventDefault();
    navigate("/");
    // console.log(category, event.target.value);
  };
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-teal-600 text-3xl font-bold mb-2">
          Upload Kegiatan
        </h1>
        <form onSubmit={save}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Kategori
            </label>
            <select
              type="email"
              className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
              placeholder="jhondoe@gmail.com"
              name="kategory"
              id="kategory"
              value={category}
              onChange={onChaneCategory}
            >
              <option value="Dinas Luar Kota">Dinas Luar Kota</option>
              <option value="Dinas Dalam Kota">Dinas Dalam Kota</option>
              <option value="Dinas Biasa">Dinas Biasa</option>
              <option value="Kantor BKN">Kantor BKN</option>
            </select>
            <p>{category}</p>
          </div>

          <div classNme="mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Tanggal Kegiatan
            </label>
            <input
              type="date"
              className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
              placeholder=""
              name="desc"
              id="desc"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            />
          </div>
          <div classNme="mt-4 mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Waktu Kegiatan
            </label>
            <input
              type="time"
              className="w-full border rounded text-slate-700 py-2 px-3 placeholder:opacity-50"
              placeholder=""
              name="desc"
              id="desc"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            />
          </div>
          <div classNme="mt-4 mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-slate-700 font-bold mb-2"
            >
              Deskripsi Kegiatan
            </label>
            <input
              type="text"
              className="w-full border rounded text-slate-700 py-6 px-3 placeholder:opacity-50"
              placeholder=""
              name="desc"
              id="desc"
              onChange={(event) => {
                setDesc(event.target.value);
              }}
            />
          </div>

          <button
            className="w-full rounded py-2 px-3 text-white bg-teal-800 mt-4"
            onClick={createUser}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
