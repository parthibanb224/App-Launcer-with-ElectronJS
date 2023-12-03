//import axios from 'axios';
import { createContext, useState, useContext } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import { jwtDecode } from 'jwt-decode';
import { FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";

const applicationsList = [
  {
    "name": "YouTube",
    "icons": <FaYoutube className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.youtube.com",
    "loading": "true"
  },
  {
    "name": "Google",
    "icons": <FcGoogle className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.google.co.in",
    "loading": "true"
  },
  {
    "name": "Twitter",
    "icons": <FaTwitter className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://twitter.com",
    "loading": "true"
  },
  {
    "name": "Linkedin",
    "icons": <FaLinkedin className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.linkedin.com",
    "loading": "true"
  },
  {
    "name": "Facebook",
    "icons": <FaFacebook className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.facebook.com",
    "loading": "true"
  },
  {
    "name": "Instagram",
    "icons": <FaInstagramSquare className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.instagram.com",
    "loading": "true"
  },
  {
    "name": "Whatsapp",
    "icons": <FaWhatsappSquare className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.whatsapp.com",
    "loading": "true"
  },
  {
    "name": "Gmail",
    "icons": <SiGmail className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.gmail.com",
    "loading": "true"
  },
  {
    "name": "Amazon",
    "icons": <FaAmazon className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.amazon.com",
    "loading": "true"
  },
  {
    "name": "Flipkart",
    "icons": <SiFlipkart className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.flipkart.com",
    "loading": "true"
  },
  {
    "name": "Spotify",
    "icons": <FaSpotify className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.spotify.com",
    "loading": "true"
  },
  {
    "name": "Gaana",
    "icons": <FaMusic className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.gaana.com",
    "loading": "true"
  },
  {
    "name": "Google Drive",
    "icons": <FaGoogleDrive className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://drive.google.com",
    "loading": "true"
  },
  {
    "name": "Google Meet",
    "icons": <SiGooglemeet className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://meet.google.com",
    "loading": "true"
  },
  {
    "name": "Google Maps",
    "icons": <SiGooglemaps className='w-full h-36 mb-1 mx-auto p-3 object-contain'/>,
    "parameter": "https://www.google.com/maps",
    "loading": "true"
  },
]

const DataContext = createContext({
  input: [],
  setInput: () => Promise,
  handleSignup: () => null,
  handleLogin: () => null,
  handleMail: () => null,
  loaded: '',
  setLoaded: () => Promise,
  signinUser: '',
  setSigninUser: () => Promise,
  handleLogout: () => null,
  isLoggedin: Boolean,
  setIsLoggedin: () => Promise,
  applications: [],
  setApplications: () => Promise,
  showAddForm: Boolean,
  setShowAddForm: () => Promise,
  showEditForm: () => Boolean,
  setShowEditForm: () => Promise,
  newApplicationInfo: {
    name: '',
    icons: '',
    parameter: '',
    loading: 'true'
  },
  setNewApplicationInfo: () => Promise,
  cancelEditApplication: () => null,
  saveEditApplication: () => null,
  editApplicationHandler: () => null,
  handleEditInputChange: () => null,
  addApplicationWithInfo: () => null,
  handleApplication: () => null,
  applicationsLists: [],
  setApplicationsLists: () => Promise,
  mode: "true",
  setMode: () => Promise,
})

export const useData = () => useContext(DataContext);

export default function DataContextProvider({ children }) {
  const [input, setInput] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [loaded, setLoaded] = useState('')
  const [signinUser, setSigninUser] = useState('')
  const [applications, setApplications] = useState(applicationsList);
  const [applicationsLists, setApplicationsLists] = useState(applicationsList);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editApplication, setEditApplication] = useState(null);
  const [newApplicationInfo, setNewApplicationInfo] = useState({
    name: '',
    icons: '',
    parameter: '',
    loading: 'true'
  });
  const [mode, setMode] = useState("true");

  // useEffect(() => {
  //   const URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/users/${signinUser}` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/users/${signinUser}`;
  //   axios.get(URL)
  //     .then(res => {
  //       // console.log(res.data.result);
  //       setUser(res.data.result);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [signinUser])

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const URL =
  //       import.meta.env.MODE === 'development'
  //         ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/data/get`
  //         : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/data/get`;

  //     const response = await axios.get(URL);
  //     setData(response.data.result);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const navigat = useNavigate();
  // const handleSignup = (event) => {
  //   event.preventDefault();
  //   const SIGNUP_URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/signup/createUser` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/signup/createUser`;
  //   axios.post(SIGNUP_URL, input)
  //     .then(res => {
  //       navigat('/login')
  //     })
  //     .catch(err => {
  //       alert("Something Went Wrong")
  //       console.log("Account Created Failed", err);
  //     })
  // };

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   const axiosConfig = {
  //     headers: {
  //       'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  //     },
  //   };
  //   const LOGIN_URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/login` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/login`;
  //   axios.post(LOGIN_URL, input, axiosConfig)
  //     .then(res => {
  //       if (res.data.success) {
  //         if (res.data.message === "Login Successful!!") {
  //           sessionStorage.setItem("Authorization", res.data.token);
  //           var decoded = jwtDecode(res.data.token);
  //           // sessionStorage.setItem("Token", JSON.stringify(decoded))
  //           setSigninUser(decoded.name);
  //           setIsLoggedin(true);
  //           navigat('/', { replace: true });
  //         }
  //         else {
  //           alert("Password is wrong, Try Again!!");
  //         }
  //       }
  //       else {
  //         alert("Account Does not Exists, Please create your account to continue!!");
  //       }
  //     })
  //     .catch(err => {
  //       alert("Something Went Wrong");
  //       console.log(err);
  //     })
  // }


  // const handleMail = (event) => {
  //   event.preventDefault();
  //   // toast("Email Sending.....",{autoClose: 2000,pauseOnHover: false});
  //   setLoaded("true");
  //   const FORGOT_URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/forgot` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/forgot`;
  //   axios.put(FORGOT_URL, input)
  //     .then(response => {
  //       if (response.data.success) {
  //         setLoaded("false");
  //         toast("Email Sending Successfully");
  //         // alert(`${response.data.message} => Go to Mail`)
  //       }
  //     })
  //     .catch(err => {
  //       setLoaded("false");
  //       toast("Enter Valid Email");
  //     })
  // }

  // const handleLogout = async (event) => {
  //   const axiosConfigs = {
  //     headers: {
  //       'Cache-Control': 'no-store, no-cache, must-revalidate, private',
  //     },
  //   };
  //   const LOGOUT_URL = import.meta.env.MODE === 'development' ? `${import.meta.env.VITE_REACT_APP_DEV_URL_FOR_BACKEND}/login/logout` : `${import.meta.env.VITE_REACT_APP_PRO_URL_FOR_BACKEND}/login/logout`;
  //   await axios.post(LOGOUT_URL, axiosConfigs)
  //     .then(res => {
  //       if (res.data === "Logged out successfully") {
  //         setIsLoggedin(false);
  //         sessionStorage.removeItem('Authorization');
  //         navigat('/', { replace: true });
  //         window.location.reload();
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  const addApplicationWithInfo = () => {
    const newApplication = {
      name: newApplicationInfo.name,
      icons: newApplicationInfo.icons,
      parameter: newApplicationInfo.parameter,
      loading: newApplicationInfo.loading,
    };

    // Update the applications state with the new application
    setApplications(prevApplications => [...prevApplications, newApplication]);

    setApplicationsLists(prevApplications => [...prevApplications, newApplication]);

    // Clear the entered application state
    setNewApplicationInfo({
      name: '',
      icons: '',
      parameter: ''
    });

    setShowAddForm(false);
  };


  const handleApplication = async (apps) => {
    try {
      if (applications.some(app => app.name === apps.name)) {
        setApplicationsLists(applicationsLists.map(app => {
          if(app.name === apps.name){
            let obj = {...app};
            obj.loading = "false";
            return {...obj}
          }
          return {...app}
        }))

        const updatedApplications = applications.filter((app) => app.name !== apps.name);
        setApplications(updatedApplications);

        setMode("false");
      }
      else {
        setApplications([ ...applications, {...apps} ]);

        const selectedApplication = applicationsLists.map((app) =>
          app.name === apps.name ? { ...app, loading: "true" } : app
        );
        setApplicationsLists(selectedApplication);
        setMode("true")
      }
    } catch (error) {
      console.error('Error removing application:', error);
      // Handle error, display a message, etc.
    }
  };

  const setNewApplicationState = (applicationInfo) => {
    setNewApplicationInfo({
      name: applicationInfo.name,
      icons: applicationInfo.icons,
      parameter: applicationInfo.parameter
    });
  };

  const editApplicationHandler = (app) => {
    setEditApplication(app);
    setNewApplicationState({
      name: app.name,
      icons: app.icons,
      parameter: app.parameter || '',
    });
    setShowEditForm(true);
  };

  const handleEditInputChange = (e, field) => {
    setNewApplicationState({
      ...newApplicationInfo,
      [field]: e.target.value,
    });
  };

  const saveEditApplication = async () => {
    try {
      const updatedApplications = applications.map((app) =>
        app.name === editApplication.name ? { ...app, ...newApplicationInfo } : app
      );
      setApplications(updatedApplications);

      const updatedApplication = applicationsLists.map((app) =>
        app.name === editApplication.name ? { ...app, ...newApplicationInfo } : app
      );
      setApplicationsLists(updatedApplication);

      // Reset edit-related state
      setShowEditForm(false);
      setEditApplication(null);
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  const cancelEditApplication = () => {
    setShowEditForm(false);
    setEditApplication(null);
  };



  const value = {
    input,
    setInput,
    // handleSignup,
    // handleLogin,
    // handleMail,
    loaded,
    signinUser,
    setSigninUser,
    isLoggedin,
    //handleLogout,
    setIsLoggedin,
    applications,
    setApplications,
    showAddForm,
    setShowAddForm,
    showEditForm,
    setShowEditForm,
    newApplicationInfo,
    setNewApplicationInfo,
    cancelEditApplication,
    saveEditApplication,
    editApplicationHandler,
    handleEditInputChange,
    addApplicationWithInfo,
    handleApplication,
    applicationsLists,
    setApplicationsLists,
    mode,
    setMode,
  }

  return (
    <DataContext.Provider value={value}>{children}</DataContext.Provider>
  )
}
