import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { BoxLoading } from 'react-loadingg';

import { fetchUserData } from "../../api";
import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";

import useToken from "../../utils/hooks/useToken";


export default function Profile() {
  const {token} = useToken();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetchUserData(token)
        .then((res) => {
          if(res.data.data){
            console.log(res);
            setUserData(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    console.log(userData);
  }, []);

  return (
    <>
      <Navbar token={token} />
      <MainSection />
      <section>
        <div className="container py-5" style={{position: "relative"}}>
          {
            !userData ? <BoxLoading />
            :
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                    />
                    <h5 className="my-3">{userData.name}</h5>
                    <p className="text-muted mb-1">Seller</p>
                    <p className="text-muted mb-4">{userData.address || null }</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userData.name || null }</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userData.email || null }</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userData.phone || null }</p>
                      </div>
                    </div>
                    <hr />

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{userData.address || null }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
      <Footer />
    </>
  );
}
