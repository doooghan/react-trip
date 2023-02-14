import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../main";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}
// 使用 useContent
// const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
//   const value = useContext(appContext);
//   return (
//     <div className={styles.cardContainer}>
//       <img src={`https://robohash.org/${id}`} alt="robot" />
//       <h2>{name}</h2>
//       <p>{email}</p>
//       <p>{value.username}</p>
//     </div>
//   );
// };

// 使用 consumer
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <appContext.Consumer>
      {(value) => {
        return (
          <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{value.username}</p>
          </div>
        );
      }}
    </appContext.Consumer>
  );
};

export default Robot;
