// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useMediaQuery } from "react-responsive";
// import sprite from "../../assets/sprite.svg";
// import defaultPhoto from "../../assets/avatar.jpg";
// import UserLogoModal from "../UserLogoModal/UserLogoModal";
// import {
//   selectLogoutModal,
//   selectSettingModal,
//   selectUser,
// } from "../../redux/selectors";
// import {
//   AvatarWrapper,
//   StyledBtn,
//   StyledName,
//   StyledSvg,
//   StyledImg,
//   StyledWrapper,
//   StyledSpan,
// } from "./UserLogo.styled";

// const UserLogo = () => {
//   const isSettingModalOpen = useSelector(selectSettingModal);
//   const isLogoutModalOpen = useSelector(selectLogoutModal);
//   const { name, email, avatarURL } = useSelector(selectUser);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;
//   const displayName =
//     name ||
//     email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1);

//   const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });
//   return (
//     <>
//       <div>
//         <StyledWrapper>
//           <StyledBtn onClick={handleClick}>
//             {isNotMobile && <StyledName>{displayName}</StyledName>}
//             <AvatarWrapper $borderColor={avatarURL ? "transparent" : "#407bff"}>
//               {avatarURL ? (
//                 <StyledImg
//                   src={avatarURL ? avatarURL : defaultPhoto}
//                   width={32}
//                   height={32}
//                   alt="user avatar"
//                 />
//               ) : name ? (
//                 <StyledName>{name[0].toUpperCase()}</StyledName>
//               ) : (
//                 <StyledSpan>{email[0].toUpperCase()}</StyledSpan>
//               )}
//             </AvatarWrapper>
//             <StyledSvg width={16} height={16}>
//               <use href={`${sprite}#icon-chevron-double-up`} />
//             </StyledSvg>
//           </StyledBtn>
//         </StyledWrapper>
//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//         >
//           <UserLogoModal
//             isSettingModalOpen={isSettingModalOpen}
//             isLogoutModalOpen={isLogoutModalOpen}
//             onClose={() => setAnchorEl(false)}
//           />
//         </Popover>
//       </div>
//     </>
//   );
// };

// export default UserLogo;
