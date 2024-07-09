import React, { useEffect, useState } from "react";
import { getAdminLoginedSessionID } from "../js/session";
import { Link, useNavigate } from "react-router-dom";
import { convertMapToArray, getAllMemberInfo } from "../js/utils";
import Modal from "./Modal";


const AdminMemberList = () => {

    //Hook
    const [allMembers, setAllMembers ] = useState([]);
    const [isModal, setIsModal] = useState(false);    
    const [selectedUId, setSelectedUId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('[AdminMemberList] useEffect()');

        if (getAdminLoginedSessionID() === '') {
            alert('Please admin sign in');
            navigate('/adminsignin');
        }

            let allMemoberInfo = getAllMemberInfo();
            let allMemerInfoArr = convertMapToArray(allMemoberInfo);
            setAllMembers(allMemerInfoArr);



    },[]);

    const uIdClickHandler = (uId) => {
        console.log('[AdminMemberList] uIdClickHandler');

        setSelectedUId(uId);
        setIsModal(true);


    }

    return(
        <>
        <div className="admin-member-list">
            <h3>ALL MEMBER LIST</h3>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>uId</th>
                        <th>uPw</th>
                        <th>uMail</th>
                        <th>uPhone</th>
                        <th>uRegDate</th>
                        <th>uModDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allMembers.map((member, idx) => {
                            return(

                                <tr key={idx}>
                                    <td><Link onClick={() => uIdClickHandler(member.uId)}>{member.uId}</Link></td>
                                    <td>*******</td>
                                    <td>{member.uMail}</td>
                                    <td>{member.uPhone}</td>
                                    <td>{member.uRegDate}</td>
                                    <td>{member.uModDate}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
        {
            isModal
            ?
            <Modal selectedUId={selectedUId} setIsModal={setIsModal} />
            :
            null

        }
        </>
    );
}


export default AdminMemberList;