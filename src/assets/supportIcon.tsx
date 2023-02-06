import { Box } from "@mui/material";
import { FC } from "react";
import { CustomSVG } from "../components/utils/BoxSvg";
import WomanIconimg from "../assets/MaskGroupcopy2.png";

interface Props {
  mr?: number;
}

export const SupportIcon = () => {
  return (
    <CustomSVG width="13" height="14" viewBox="0 0 13 14" fill="none">
      <path
        d="M12.5684 4.97656C12.526 4.86654 12.4499 4.77344 12.3398 4.69727C12.2383 4.62109 12.124 4.58301 11.9971 4.58301C11.9548 4.58301 11.9167 4.58724 11.8828 4.5957C11.849 4.60417 11.8151 4.61263 11.7812 4.62109L11.6035 4.69727C11.3242 4.1556 10.973 3.67741 10.5498 3.2627C10.1351 2.83952 9.6696 2.49251 9.15332 2.22168L9.17871 2.03125C9.19564 1.9974 9.2041 1.96354 9.2041 1.92969C9.21257 1.89583 9.2168 1.85775 9.2168 1.81543C9.2168 1.68848 9.17871 1.57422 9.10254 1.47266C9.03483 1.37109 8.94596 1.29492 8.83594 1.24414C8.48893 1.10872 8.11654 1.00293 7.71875 0.926758C7.32943 0.850586 6.92318 0.8125 6.5 0.8125C6.07682 0.8125 5.66634 0.850586 5.26855 0.926758C4.87077 1.00293 4.48991 1.11296 4.12598 1.25684C4.03288 1.29915 3.94824 1.37109 3.87207 1.47266C3.80436 1.57422 3.77051 1.68848 3.77051 1.81543C3.77051 1.85775 3.77474 1.89583 3.7832 1.92969C3.79167 1.96354 3.80013 1.9974 3.80859 2.03125L3.88477 2.20898C3.3431 2.48828 2.86068 2.83952 2.4375 3.2627C2.02279 3.67741 1.68001 4.1429 1.40918 4.65918L1.21875 4.63379C1.1849 4.61686 1.15104 4.6084 1.11719 4.6084C1.08333 4.59993 1.04525 4.5957 1.00293 4.5957C0.875977 4.5957 0.761719 4.63379 0.660156 4.70996C0.558594 4.77767 0.482422 4.86654 0.431641 4.97656C0.296224 5.32357 0.19043 5.69596 0.114258 6.09375C0.0380859 6.48307 0 6.88932 0 7.3125C0 7.73568 0.0380859 8.14616 0.114258 8.54395C0.19043 8.94173 0.300456 9.32259 0.444336 9.68652C0.486654 9.77962 0.558594 9.86426 0.660156 9.94043C0.761719 10.0081 0.875977 10.042 1.00293 10.042C1.04525 10.042 1.08333 10.0378 1.11719 10.0293C1.15104 10.0208 1.1849 10.0124 1.21875 10.0039L1.39648 9.92773C1.67578 10.4694 2.02279 10.9518 2.4375 11.375C2.86068 11.7897 3.3304 12.1325 3.84668 12.4033L3.82129 12.5938C3.80436 12.6276 3.79167 12.6615 3.7832 12.6953C3.7832 12.7292 3.7832 12.7673 3.7832 12.8096C3.7832 12.9365 3.81706 13.0508 3.88477 13.1523C3.96094 13.2539 4.05404 13.3301 4.16406 13.3809C4.51107 13.5163 4.87923 13.6221 5.26855 13.6982C5.66634 13.7744 6.07682 13.8125 6.5 13.8125C6.91471 13.8125 7.32096 13.7744 7.71875 13.6982C8.11654 13.6221 8.50163 13.512 8.87402 13.3682C8.96712 13.3258 9.04753 13.2539 9.11523 13.1523C9.18294 13.0508 9.2168 12.9365 9.2168 12.8096C9.2168 12.7673 9.21257 12.7292 9.2041 12.6953C9.2041 12.6615 9.19564 12.6276 9.17871 12.5938L9.11523 12.416C9.64844 12.1367 10.1266 11.7897 10.5498 11.375C10.973 10.9518 11.32 10.4821 11.5908 9.96582L11.7812 9.99121C11.8151 10.0081 11.849 10.0208 11.8828 10.0293C11.9167 10.0293 11.9548 10.0293 11.9971 10.0293C12.124 10.0293 12.2383 9.99544 12.3398 9.92773C12.4414 9.85156 12.5176 9.75846 12.5684 9.64844C12.7038 9.30143 12.8096 8.93327 12.8857 8.54395C12.9619 8.14616 13 7.73568 13 7.3125C13 6.89779 12.9619 6.49154 12.8857 6.09375C12.8096 5.69596 12.6995 5.31087 12.5557 4.93848L12.5684 4.97656ZM3.87207 8.36621L1.00293 9.41992C0.875977 9.10677 0.778646 8.77246 0.710938 8.41699C0.643229 8.06152 0.609375 7.69336 0.609375 7.3125C0.609375 6.93164 0.643229 6.56348 0.710938 6.20801C0.787109 5.84408 0.888672 5.49284 1.01562 5.1543L1.14258 5.25586L3.87207 6.25879C3.81283 6.4196 3.76204 6.58887 3.71973 6.7666C3.68587 6.94434 3.66895 7.1263 3.66895 7.3125C3.66895 7.4987 3.68587 7.68066 3.71973 7.8584C3.76204 8.03613 3.81706 8.20964 3.88477 8.37891L3.87207 8.36621ZM6.5 1.42188C6.88086 1.42188 7.24902 1.45996 7.60449 1.53613C7.96842 1.60384 8.31543 1.70117 8.64551 1.82812L8.55664 1.95508L7.55371 4.68457C7.3929 4.62533 7.22363 4.57878 7.0459 4.54492C6.86816 4.5026 6.6862 4.48145 6.5 4.48145C6.3138 4.48145 6.1276 4.5026 5.94141 4.54492C5.76367 4.57878 5.5944 4.62956 5.43359 4.69727L4.39258 1.81543C4.70573 1.68848 5.04004 1.59115 5.39551 1.52344C5.75098 1.45573 6.11914 1.42188 6.5 1.42188ZM6.5 13.2031C6.11914 13.2031 5.74674 13.165 5.38281 13.0889C5.02734 13.0212 4.68457 12.9238 4.35449 12.7969L5.44629 9.94043C5.6071 9.99967 5.77637 10.0505 5.9541 10.0928C6.13184 10.1266 6.3138 10.1436 6.5 10.1436C6.6862 10.1436 6.86816 10.1266 7.0459 10.0928C7.2321 10.0505 7.4056 9.99544 7.56641 9.92773L8.60742 12.8096C8.29427 12.9365 7.95996 13.0339 7.60449 13.1016C7.24902 13.1693 6.88086 13.2031 6.5 13.2031ZM8.55664 6.4873C8.60742 6.60579 8.64551 6.73698 8.6709 6.88086C8.70475 7.01628 8.72168 7.15592 8.72168 7.2998C8.72168 7.45215 8.70475 7.60026 8.6709 7.74414C8.64551 7.87956 8.60742 8.01074 8.55664 8.1377C8.53971 8.16309 8.52702 8.19694 8.51855 8.23926C8.51855 8.27311 8.51855 8.3112 8.51855 8.35352C8.51855 8.48893 8.55241 8.60742 8.62012 8.70898C8.69629 8.81055 8.79362 8.88249 8.91211 8.9248L8.98828 8.9502C8.86979 9.11947 8.74284 9.27604 8.60742 9.41992C8.47201 9.55534 8.32389 9.67806 8.16309 9.78809L8.125 9.72461C8.07422 9.60612 7.99805 9.50879 7.89648 9.43262C7.79492 9.35645 7.68066 9.31836 7.55371 9.31836C7.51139 9.31836 7.46908 9.32259 7.42676 9.33105C7.38444 9.33952 7.34635 9.35221 7.3125 9.36914C7.19401 9.41992 7.06283 9.45801 6.91895 9.4834C6.78353 9.50879 6.64388 9.52148 6.5 9.52148C6.34766 9.52148 6.19954 9.50879 6.05566 9.4834C5.92025 9.45801 5.78906 9.41569 5.66211 9.35645C5.63672 9.34798 5.60286 9.33952 5.56055 9.33105C5.52669 9.32259 5.48861 9.31836 5.44629 9.31836C5.31934 9.31836 5.20085 9.35645 5.09082 9.43262C4.98926 9.50879 4.91732 9.60189 4.875 9.71191L4.84961 9.78809C4.68034 9.67806 4.52799 9.55534 4.39258 9.41992C4.25716 9.27604 4.13444 9.1237 4.02441 8.96289L4.08789 8.9248C4.20638 8.88249 4.29948 8.81055 4.36719 8.70898C4.44336 8.60742 4.48145 8.48893 4.48145 8.35352C4.48145 8.3112 4.47721 8.27311 4.46875 8.23926C4.46029 8.19694 4.45182 8.15885 4.44336 8.125C4.39258 8.00651 4.35026 7.87956 4.31641 7.74414C4.29102 7.60026 4.27832 7.45215 4.27832 7.2998C4.27832 7.15592 4.29102 7.01628 4.31641 6.88086C4.35026 6.73698 4.39258 6.60156 4.44336 6.47461C4.46029 6.44922 4.46875 6.4196 4.46875 6.38574C4.47721 6.34342 4.48145 6.30111 4.48145 6.25879C4.48145 6.13184 4.44336 6.01758 4.36719 5.91602C4.29948 5.80599 4.20638 5.72982 4.08789 5.6875L4.01172 5.66211C4.13021 5.49284 4.25716 5.34049 4.39258 5.20508C4.52799 5.0612 4.67611 4.93848 4.83691 4.83691L4.875 4.90039C4.91732 5.01042 4.98926 5.10352 5.09082 5.17969C5.20085 5.25586 5.31934 5.29395 5.44629 5.29395C5.48861 5.29395 5.52669 5.28971 5.56055 5.28125C5.60286 5.27279 5.64518 5.26009 5.6875 5.24316C5.80599 5.20085 5.93294 5.16699 6.06836 5.1416C6.21224 5.10775 6.35612 5.09082 6.5 5.09082C6.64388 5.09082 6.78776 5.10775 6.93164 5.1416C7.07552 5.16699 7.21094 5.20508 7.33789 5.25586C7.36328 5.26432 7.3929 5.27279 7.42676 5.28125C7.46908 5.28971 7.51139 5.29395 7.55371 5.29395C7.68066 5.29395 7.79492 5.26009 7.89648 5.19238C8.00651 5.11621 8.08268 5.01888 8.125 4.90039L8.15039 4.82422C8.31966 4.93424 8.47201 5.0612 8.60742 5.20508C8.74284 5.34049 8.86556 5.48861 8.97559 5.64941L8.91211 5.6875C8.79362 5.72982 8.69629 5.80599 8.62012 5.91602C8.55241 6.01758 8.51855 6.13184 8.51855 6.25879C8.51855 6.30111 8.52279 6.34342 8.53125 6.38574C8.53971 6.4196 8.54818 6.45345 8.55664 6.4873ZM11.9971 9.41992L11.8574 9.36914L9.12793 8.36621C9.18717 8.2054 9.23372 8.03613 9.26758 7.8584C9.3099 7.68066 9.33105 7.4987 9.33105 7.3125C9.33105 7.1263 9.3099 6.94434 9.26758 6.7666C9.23372 6.5804 9.18294 6.4069 9.11523 6.24609L11.9971 5.20508C12.124 5.51823 12.2214 5.85254 12.2891 6.20801C12.3568 6.56348 12.3906 6.93164 12.3906 7.3125C12.3906 7.69336 12.3525 8.06576 12.2764 8.42969C12.2087 8.78516 12.1113 9.13216 11.9844 9.4707L11.9971 9.41992Z"
        fill="white"
      />
    </CustomSVG>
  );
};

export const SupportForumsIcon = () => {
  return (
    <CustomSVG width="64" height="64" viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="32" rx="32" ry="32" fill="#333333" />
      <g clip-path="url(#clip0_58_181)">
        <path
          d="M39.1111 30.25V21.5C39.1111 19.5695 37.5167 18 35.5556 18H19.5556C17.5944 18 16 19.5695 16 21.5V30.25C16 32.1805 17.5944 33.75 19.5556 33.75V36.7141C19.5556 37.1516 20.0611 37.4031 20.4167 37.1406L25.0167 33.7445H35.5556C37.5167 33.75 39.1111 32.1805 39.1111 30.25ZM44.4444 26.75H40.8889V30.25C40.8889 33.143 38.4944 35.5 35.5556 35.5H26.6667V39C26.6667 40.9305 28.2611 42.5 30.2222 42.5H37.2056L41.8056 45.8961C42.1611 46.1586 42.6667 45.907 42.6667 45.4695V42.5H44.4444C46.4056 42.5 48 40.9305 48 39V30.25C48 28.3195 46.4056 26.75 44.4444 26.75Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_58_181">
          <rect
            width="32"
            height="28"
            fill="white"
            transform="translate(16 18)"
          />
        </clipPath>
      </defs>
    </CustomSVG>
  );
};

export const ArrowRight = () => {
  return (
    <CustomSVG width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M12.6729 6.58789L7.35449 1.26953C7.31803 1.23307 7.27246 1.20573 7.21777 1.1875C7.1722 1.16927 7.12207 1.16016 7.06738 1.16016C7.0127 1.16016 6.95801 1.16927 6.90332 1.1875C6.85775 1.20573 6.81217 1.23307 6.7666 1.26953L5.91895 2.13086C5.88249 2.16732 5.85059 2.21289 5.82324 2.26758C5.80501 2.31315 5.7959 2.36328 5.7959 2.41797C5.7959 2.47266 5.80501 2.52734 5.82324 2.58203C5.85059 2.6276 5.88249 2.66862 5.91895 2.70508L9.07715 5.86328H0.573242C0.472982 5.86328 0.386393 5.89974 0.313477 5.97266C0.24056 6.03646 0.204102 6.11849 0.204102 6.21875V7.53125C0.204102 7.63151 0.24056 7.7181 0.313477 7.79102C0.386393 7.85482 0.472982 7.88672 0.573242 7.88672H9.07715L5.91895 11.0449C5.88249 11.0814 5.85059 11.127 5.82324 11.1816C5.80501 11.2272 5.7959 11.2773 5.7959 11.332C5.7959 11.3867 5.80501 11.4414 5.82324 11.4961C5.85059 11.5508 5.88249 11.5964 5.91895 11.6328L6.7666 12.4805C6.81217 12.5169 6.85775 12.5443 6.90332 12.5625C6.95801 12.5807 7.0127 12.5898 7.06738 12.5898C7.12207 12.5898 7.1722 12.5807 7.21777 12.5625C7.27246 12.5443 7.31803 12.5169 7.35449 12.4805L12.6729 7.16211C12.7093 7.12565 12.7367 7.08464 12.7549 7.03906C12.7822 6.98438 12.7959 6.92969 12.7959 6.875C12.7959 6.82031 12.7822 6.77018 12.7549 6.72461C12.7367 6.66992 12.7093 6.62435 12.6729 6.58789Z"
        fill="#286EF1"
      />
    </CustomSVG>
  );
};

export const SearchIcon = () => {
  return (
    <CustomSVG width="14" height="15" viewBox="0 0 14 15" fill="none">
      <path
        d="M14 13.4531L10.8965 10.3633C11.2428 9.88018 11.5117 9.34242 11.7031 8.74997C11.9036 8.15752 12.0039 7.53317 12.0039 6.87692C12.0039 6.0475 11.849 5.2682 11.5391 4.53903C11.2201 3.80987 10.7871 3.1764 10.2402 2.63864C9.70247 2.09177 9.06901 1.65882 8.33984 1.33981C7.61068 1.02992 6.83138 0.874969 6.00195 0.874969C5.17253 0.874969 4.39323 1.02992 3.66406 1.33981C2.9349 1.65882 2.29688 2.09177 1.75 2.63864C1.21224 3.1764 0.783854 3.80987 0.464844 4.53903C0.154948 5.2682 0 6.0475 0 6.87692C0 7.70635 0.154948 8.48565 0.464844 9.21481C0.783854 9.94398 1.21224 10.582 1.75 11.1289C2.29688 11.6666 2.9349 12.095 3.66406 12.414C4.39323 12.7239 5.17253 12.8789 6.00195 12.8789C6.6582 12.8789 7.28255 12.7832 7.875 12.5918C8.46745 12.3912 9.00977 12.1133 9.50195 11.7578L12.5918 14.875L14 13.4531ZM1.99609 6.87692C1.99609 6.32093 2.10091 5.8014 2.31055 5.31833C2.52018 4.83526 2.80729 4.41143 3.17188 4.04684C3.53646 3.68226 3.96029 3.39515 4.44336 3.18552C4.93555 2.97588 5.45508 2.87106 6.00195 2.87106C6.55794 2.87106 7.07747 2.97588 7.56055 3.18552C8.05273 3.39515 8.47656 3.68226 8.83203 4.04684C9.19661 4.41143 9.48372 4.83526 9.69336 5.31833C9.90299 5.8014 10.0078 6.32093 10.0078 6.87692C10.0078 7.43291 9.90299 7.95244 9.69336 8.43552C9.48372 8.91859 9.19661 9.34242 8.83203 9.707C8.47656 10.0716 8.05273 10.3587 7.56055 10.5683C7.07747 10.778 6.55794 10.8828 6.00195 10.8828C5.45508 10.8828 4.93555 10.778 4.44336 10.5683C3.96029 10.3587 3.53646 10.0716 3.17188 9.707C2.81641 9.34242 2.53385 8.91859 2.32422 8.43552C2.11458 7.95244 2.00521 7.43291 1.99609 6.87692Z"
        fill="#707070"
      />
    </CustomSVG>
  );
};

export const NoActiveTicket = () => {
  return (
    <CustomSVG width="150" height="150" viewBox="0 0 150 150" fill="none">
      <circle cx="75" cy="75" r="75" fill="#EAF1FE" />
      <g clip-path="url(#clip0_1_540)">
        <path
          opacity="0.4"
          d="M43.1016 61.5362V98.9855C43.1016 100.738 43.8227 102.419 45.1063 103.659C46.39 104.898 48.131 105.594 49.9463 105.594H100.141C101.956 105.594 103.697 104.898 104.981 103.659C106.264 102.419 106.986 100.738 106.986 98.9855V61.5362H43.1016ZM92.3351 77.0942L71.9435 96.6174C71.7845 96.7714 71.5956 96.8936 71.3876 96.977C71.1796 97.0604 70.9566 97.1033 70.7314 97.1033C70.5062 97.1033 70.2832 97.0604 70.0752 96.977C69.8672 96.8936 69.6783 96.7714 69.5193 96.6174L57.7407 85.1541C57.5817 85 57.4558 84.8172 57.3702 84.6161C57.2846 84.415 57.2409 84.1995 57.2417 83.9821C57.2425 83.7646 57.2877 83.5495 57.3748 83.3489C57.4619 83.1484 57.5892 82.9664 57.7493 82.8135L57.7607 82.8025L61.8105 78.924C61.9694 78.77 62.1583 78.6478 62.3663 78.5644C62.5743 78.481 62.7973 78.438 63.0226 78.438C63.2478 78.438 63.4708 78.481 63.6788 78.5644C63.8868 78.6478 64.0757 78.77 64.2346 78.924L70.7942 85.3069L85.9096 70.8242C86.0686 70.6702 86.2575 70.548 86.4655 70.4646C86.6735 70.3812 86.8965 70.3383 87.1217 70.3383C87.3469 70.3383 87.5699 70.3812 87.7779 70.4646C87.9859 70.548 88.1748 70.6702 88.3338 70.8242L92.3408 74.7536C92.4999 74.9075 92.6261 75.0902 92.7119 75.2912C92.7978 75.4922 92.8418 75.7076 92.8412 75.9251C92.8407 76.1425 92.7957 76.3577 92.7088 76.5583C92.622 76.759 92.495 76.9411 92.3351 77.0942ZM86.4515 52.7246H91.0146C91.6197 52.7246 92.2001 52.4925 92.6279 52.0794C93.0558 51.6663 93.2962 51.106 93.2962 50.5217V37.3043C93.2962 36.7201 93.0558 36.1598 92.6279 35.7467C92.2001 35.3335 91.6197 35.1014 91.0146 35.1014H86.4515C85.8464 35.1014 85.266 35.3335 84.8381 35.7467C84.4103 36.1598 84.1699 36.7201 84.1699 37.3043V50.5217C84.1699 51.106 84.4103 51.6663 84.8381 52.0794C85.266 52.4925 85.8464 52.7246 86.4515 52.7246ZM59.0726 52.7246H63.6357C64.2408 52.7246 64.8212 52.4925 65.249 52.0794C65.6769 51.6663 65.9173 51.106 65.9173 50.5217V37.3043C65.9173 36.7201 65.6769 36.1598 65.249 35.7467C64.8212 35.3335 64.2408 35.1014 63.6357 35.1014H59.0726C58.4675 35.1014 57.8871 35.3335 57.4593 35.7467C57.0314 36.1598 56.791 36.7201 56.791 37.3043V50.5217C56.791 51.106 57.0314 51.6663 57.4593 52.0794C57.8871 52.4925 58.4675 52.7246 59.0726 52.7246Z"
          fill="#75A5FF"
        />
        <path
          d="M92.5976 74.7536L88.6456 70.8435C88.4903 70.6885 88.3054 70.5653 88.1015 70.4807C87.8976 70.3961 87.6787 70.3519 87.4574 70.3506C87.236 70.3494 87.0166 70.391 86.8117 70.4732C86.6068 70.5554 86.4204 70.6766 86.2633 70.8297L71.4085 85.3124L64.962 78.9295C64.8066 78.7747 64.6216 78.6515 64.4177 78.567C64.2137 78.4826 63.9948 78.4385 63.7735 78.4374C63.5521 78.4362 63.3327 78.478 63.1279 78.5603C62.923 78.6426 62.7367 78.7639 62.5797 78.9171L58.5997 82.7956C58.442 82.9482 58.3165 83.1298 58.2304 83.3302C58.1443 83.5305 58.0993 83.7456 58.098 83.963C58.0967 84.1805 58.1391 84.396 58.2228 84.5973C58.3065 84.7987 58.4298 84.9818 58.5857 85.1362L70.1612 96.5995C70.3165 96.7544 70.5014 96.8777 70.7053 96.9623C70.9093 97.0469 71.1282 97.0911 71.3495 97.0923C71.5708 97.0936 71.7902 97.052 71.9951 96.9697C72.2001 96.8875 72.3864 96.7664 72.5436 96.6133L92.5836 77.0901C92.7413 76.9375 92.8668 76.7558 92.9528 76.5555C93.0389 76.3552 93.0839 76.1401 93.0852 75.9226C93.0865 75.7052 93.0441 75.4896 92.9604 75.2883C92.8768 75.087 92.7534 74.9039 92.5976 74.7495V74.7536ZM100.259 43.913H93.5323V50.5217C93.5323 51.106 93.2961 51.6663 92.8756 52.0794C92.4551 52.4925 91.8848 52.7246 91.2901 52.7246H86.8056C86.2109 52.7246 85.6406 52.4925 85.2201 52.0794C84.7996 51.6663 84.5634 51.106 84.5634 50.5217V43.913H66.6255V50.5217C66.6255 51.106 66.3892 51.6663 65.9688 52.0794C65.5482 52.4925 64.9779 52.7246 64.3833 52.7246H59.8988C59.3041 52.7246 58.7338 52.4925 58.3133 52.0794C57.8928 51.6663 57.6565 51.106 57.6565 50.5217V43.913H50.9298C49.1458 43.913 47.4348 44.6093 46.1733 45.8487C44.9118 47.0881 44.2031 48.769 44.2031 50.5217V61.5362H106.986V50.5217C106.986 48.769 106.277 47.0881 105.016 45.8487C103.754 44.6093 102.043 43.913 100.259 43.913Z"
          fill="white"
        />
        <path
          opacity="0.4"
          d="M43.1016 61.0362H42.6016V61.5362V98.9855C42.6016 100.877 43.3798 102.687 44.759 104.018C46.1377 105.349 48.0039 106.094 49.9463 106.094H100.141C102.083 106.094 103.95 105.349 105.328 104.018C106.707 102.687 107.486 100.877 107.486 98.9855V61.5362V61.0362H106.986H43.1016ZM71.5977 96.2562L71.5956 96.2583C71.4838 96.3666 71.3501 96.4534 71.2016 96.5129C71.053 96.5725 70.8932 96.6033 70.7314 96.6033C70.5696 96.6033 70.4098 96.5725 70.2613 96.5129C70.1131 96.4535 69.9795 96.3669 69.8679 96.2589C69.8677 96.2587 69.8675 96.2585 69.8673 96.2583L58.0894 84.7957L58.0886 84.795C57.9769 84.6867 57.8894 84.5592 57.8302 84.4202C57.7711 84.2813 57.7411 84.133 57.7417 83.9839C57.7422 83.8347 57.7732 83.6867 57.8334 83.5481C57.8936 83.4095 57.9821 83.2825 58.0947 83.175L58.0965 83.1732L58.1065 83.1636L58.1079 83.1622L62.1563 79.2851L62.1584 79.2831C62.2701 79.1748 62.4039 79.088 62.5524 79.0285C62.7009 78.9689 62.8608 78.938 63.0226 78.938C63.1843 78.938 63.3442 78.9689 63.4927 79.0285C63.6412 79.088 63.775 79.1748 63.8867 79.2831L70.4455 85.6652L70.7915 86.0019L71.1401 85.6679L86.2555 71.1852L86.2575 71.1833C86.3693 71.075 86.503 70.9882 86.6515 70.9287C86.8 70.8691 86.9599 70.8383 87.1217 70.8383C87.2835 70.8383 87.4433 70.8691 87.5918 70.9287C87.7398 70.988 87.8731 71.0744 87.9847 71.1822C87.9851 71.1825 87.9854 71.1829 87.9858 71.1833L91.9907 75.1106L91.9933 75.1131C92.1051 75.2212 92.1928 75.3487 92.2521 75.4876C92.3115 75.6265 92.3416 75.7747 92.3412 75.9238C92.3409 76.073 92.31 76.2211 92.25 76.3597C92.19 76.4984 92.1017 76.6254 91.9892 76.7331L71.5977 96.2562ZM57.112 35.387L57.4593 35.7467L57.112 35.387C56.5885 35.8924 56.291 36.5817 56.291 37.3043V50.5217C56.291 51.2444 56.5885 51.9337 57.112 52.4391C57.6348 52.944 58.3404 53.2246 59.0726 53.2246H63.6357C64.3679 53.2246 65.0735 52.944 65.5963 52.4391C66.1198 51.9337 66.4173 51.2444 66.4173 50.5217V37.3043C66.4173 36.5817 66.1198 35.8924 65.5963 35.387C65.0735 34.8821 64.3679 34.6014 63.6357 34.6014H59.0726C58.3404 34.6014 57.6349 34.8821 57.112 35.387ZM86.4515 53.2246H91.0146C91.7468 53.2246 92.4523 52.944 92.9752 52.4391C93.4987 51.9337 93.7962 51.2444 93.7962 50.5217V37.3043C93.7962 36.5817 93.4987 35.8924 92.9752 35.387C92.4523 34.8821 91.7468 34.6014 91.0146 34.6014H86.4515C85.7193 34.6014 85.0137 34.8821 84.4908 35.387C83.9674 35.8924 83.6699 36.5817 83.6699 37.3043V50.5217C83.6699 51.2444 83.9674 51.9337 84.4908 52.4391C85.0137 52.944 85.7193 53.2246 86.4515 53.2246Z"
          fill="#AAAAAA"
          stroke="black"
        />
        <path
          d="M91.8451 73.5649V73.57L88.6738 70.4864C88.6736 70.4863 88.6734 70.4861 88.6733 70.4859C88.4684 70.2852 88.2254 70.1263 87.9588 70.0177C87.692 69.9089 87.4061 69.8523 87.1175 69.8506C86.8289 69.849 86.5424 69.9024 86.2743 70.0081C86.0061 70.1138 85.7612 70.27 85.5538 70.4686L85.5537 70.4687L70.7869 84.6174L64.5745 78.5722C64.5743 78.572 64.5741 78.5718 64.5739 78.5716C64.3689 78.3711 64.1259 78.2124 63.8592 78.1039C63.5923 77.9953 63.3064 77.9388 63.0178 77.9374C62.7292 77.9359 62.4427 77.9894 62.1747 78.0953C61.9066 78.2011 61.6617 78.3575 61.4545 78.5562L57.4061 82.4332C57.406 82.4334 57.4058 82.4336 57.4056 82.4338C57.1977 82.6315 57.0313 82.8679 56.9168 83.1299C56.8022 83.3921 56.742 83.6742 56.7403 83.96C56.7385 84.2457 56.7952 84.5286 56.9067 84.7921C57.0182 85.0556 57.1819 85.2941 57.3877 85.4944L57.3877 85.4945L69.165 96.9565C69.1653 96.9569 69.1657 96.9572 69.166 96.9575C69.3708 97.158 69.6136 97.3167 69.88 97.4253C70.1468 97.5341 70.4327 97.5907 70.7213 97.5923C71.01 97.594 71.2965 97.5406 71.5646 97.4349C71.8327 97.3292 72.0776 97.173 72.285 96.9744C72.285 96.9744 72.285 96.9744 72.285 96.9744L92.6753 77.4524C92.6756 77.4522 92.6758 77.4519 92.6761 77.4517C92.8839 77.2539 93.0502 77.0176 93.1647 76.7558C93.2793 76.4936 93.3395 76.2114 93.3412 75.9257C93.343 75.6399 93.2862 75.3571 93.1748 75.0935C93.0633 74.83 92.8996 74.5915 92.6938 74.3912L91.8451 73.5649ZM93.2962 43.413H92.7962V43.913V50.5217C92.7962 50.9676 92.6129 51.3989 92.2806 51.7197C91.9478 52.0411 91.4927 52.2246 91.0146 52.2246H86.4515C85.9734 52.2246 85.5183 52.0411 85.1854 51.7197C84.8532 51.3989 84.6699 50.9676 84.6699 50.5217V43.913V43.413H84.1699H65.9173H65.4173V43.913V50.5217C65.4173 50.9676 65.234 51.3989 64.9017 51.7197C64.5689 52.0411 64.1138 52.2246 63.6357 52.2246H59.0726C58.5945 52.2246 58.1394 52.0411 57.8066 51.7197C57.4743 51.3989 57.291 50.9676 57.291 50.5217V43.913V43.413H56.791H49.9463C48.0039 43.413 46.1377 44.1579 44.759 45.489C43.3798 46.8207 42.6016 48.6306 42.6016 50.5217V61.5362V62.0362H43.1016H106.986H107.486V61.5362V50.5217C107.486 48.6306 106.707 46.8207 105.328 45.489C103.95 44.1579 102.083 43.413 100.141 43.413H93.2962Z"
          fill="white"
          stroke="#888888"
        />
      </g>
      <circle
        cx="102.579"
        cy="100.087"
        r="14.9203"
        fill="#F9FBFF"
        stroke="#888888"
      />
      <g clip-path="url(#clip1_1_540)">
        <path
          d="M108.244 98.6413H103.996V94.3043C103.996 93.7722 103.573 93.3406 103.052 93.3406H102.108C101.587 93.3406 101.164 93.7722 101.164 94.3043V98.6413H96.9153C96.394 98.6413 95.9712 99.0729 95.9712 99.6051V100.569C95.9712 101.101 96.394 101.533 96.9153 101.533H101.164V105.87C101.164 106.402 101.587 106.833 102.108 106.833H103.052C103.573 106.833 103.996 106.402 103.996 105.87V101.533H108.244C108.766 101.533 109.189 101.101 109.189 100.569V99.6051C109.189 99.0729 108.766 98.6413 108.244 98.6413Z"
          fill="#888888"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_540">
          <rect
            width="66.087"
            height="72.6957"
            fill="white"
            transform="translate(42 34)"
          />
        </clipPath>
        <clipPath id="clip1_1_540">
          <rect
            width="13.2174"
            height="15.4203"
            fill="white"
            transform="translate(95.9712 92.3768)"
          />
        </clipPath>
      </defs>
    </CustomSVG>
  );
};

export const ArrowDown = () => {
  return (
    <CustomSVG width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M9.99414 4.08008C10.0202 4.10612 10.043 4.13542 10.0625 4.16797C10.082 4.20052 10.1016 4.23307 10.1211 4.26562C10.1341 4.29818 10.1471 4.33398 10.1602 4.37305C10.1667 4.41211 10.1699 4.45443 10.1699 4.5C10.1699 4.53906 10.1667 4.57812 10.1602 4.61719C10.1471 4.66276 10.1309 4.70182 10.1113 4.73437C10.0983 4.76693 10.082 4.79622 10.0625 4.82227C10.043 4.85482 10.0202 4.88411 9.99414 4.91016L6.41992 8.48437C6.39388 8.51042 6.36458 8.5332 6.33203 8.55273C6.29948 8.57227 6.26693 8.58854 6.23438 8.60156C6.19531 8.62109 6.15625 8.63411 6.11719 8.64062C6.07813 8.64713 6.03906 8.65039 6 8.65039C5.95443 8.65039 5.91211 8.64713 5.87305 8.64062C5.83398 8.63411 5.79818 8.62109 5.76563 8.60156C5.72656 8.58854 5.69076 8.57227 5.6582 8.55273C5.62565 8.5332 5.59635 8.51042 5.57031 8.48437L1.99609 4.90039C1.97005 4.87435 1.94727 4.84505 1.92773 4.8125C1.9082 4.77995 1.88867 4.7474 1.86914 4.71484C1.85612 4.68229 1.84635 4.64648 1.83984 4.60742C1.83333 4.57487 1.83008 4.53906 1.83008 4.5C1.83008 4.5 1.83008 4.49674 1.83008 4.49023C1.83008 4.49023 1.83008 4.48698 1.83008 4.48047C1.83008 4.44141 1.83659 4.40234 1.84961 4.36328C1.85612 4.32422 1.86589 4.28841 1.87891 4.25586C1.89193 4.2168 1.9082 4.18099 1.92773 4.14844C1.94727 4.11588 1.97005 4.08659 1.99609 4.06055L2.41602 3.64062C2.44206 3.61458 2.47135 3.5918 2.50391 3.57226C2.52995 3.55273 2.5625 3.53646 2.60156 3.52344C2.63412 3.50391 2.66992 3.49088 2.70899 3.48437C2.74805 3.47786 2.78711 3.47461 2.82617 3.47461C2.87175 3.47461 2.91406 3.47786 2.95313 3.48437C2.99219 3.49088 3.028 3.50391 3.06055 3.52344C3.0931 3.53646 3.12565 3.55273 3.1582 3.57226C3.19076 3.5918 3.22005 3.61458 3.24609 3.64062L6 6.38477L8.73438 3.65039C8.78646 3.60482 8.84831 3.56576 8.91992 3.5332C8.99154 3.50065 9.06641 3.48437 9.14453 3.48437C9.14453 3.48437 9.14779 3.48437 9.1543 3.48437C9.19336 3.48437 9.23242 3.48763 9.27149 3.49414C9.31055 3.50716 9.34961 3.52018 9.38867 3.5332C9.42122 3.54622 9.45378 3.5625 9.48633 3.58203C9.51888 3.60807 9.54492 3.63411 9.56445 3.66016L9.99414 4.06055L9.99414 4.08008Z"
        fill="black"
      />
    </CustomSVG>
  );
};

export const LogoStaff: FC<Props> = ({ mr }) => {
  return (
    <CustomSVG mr={mr} width="13" height="13" viewBox="0 0 10 11" fill="none">
      <path
        d="M5 0.625C4.3099 0.625 3.65885 0.755208 3.04688 1.01562C2.44141 1.27604 1.91081 1.63411 1.45508 2.08984C1.00586 2.53906 0.651042 3.06641 0.390625 3.67188C0.130208 4.28385 0 4.9349 0 5.625C0 6.3151 0.130208 6.96615 0.390625 7.57812C0.651042 8.18359 1.00586 8.71419 1.45508 9.16992C1.91081 9.61914 2.44141 9.97396 3.04688 10.2344C3.65885 10.4948 4.3099 10.625 5 10.625C5.6901 10.625 6.34115 10.4948 6.95312 10.2344C7.55859 9.97396 8.08594 9.61914 8.53516 9.16992C8.99089 8.71419 9.34896 8.18359 9.60938 7.57812C9.86979 6.96615 10 6.3151 10 5.625C10 4.9349 9.86979 4.28385 9.60938 3.67188C9.34896 3.06641 8.99089 2.53906 8.53516 2.08984C8.08594 1.63411 7.55859 1.27604 6.95312 1.01562C6.34115 0.755208 5.6901 0.625 5 0.625ZM8.27148 6.62109C8.27148 6.79688 8.24219 6.96289 8.18359 7.11914C8.125 7.27539 8.04036 7.41536 7.92969 7.53906C7.82552 7.66276 7.69857 7.76042 7.54883 7.83203C7.4056 7.89714 7.25586 7.92969 7.09961 7.92969C6.77409 7.92969 6.4974 7.80273 6.26953 7.54883C6.04818 7.28841 5.9375 6.97917 5.9375 6.62109V4.63867C5.9375 4.56706 5.91471 4.50521 5.86914 4.45312C5.82357 4.40104 5.76823 4.375 5.70312 4.375C5.63151 4.375 5.57292 4.40104 5.52734 4.45312C5.48828 4.50521 5.46875 4.56706 5.46875 4.63867V6.62109C5.46875 6.79688 5.43945 6.96289 5.38086 7.11914C5.32227 7.27539 5.24089 7.41536 5.13672 7.53906C5.02604 7.66276 4.89909 7.76042 4.75586 7.83203C4.61263 7.89714 4.45964 7.92969 4.29688 7.92969C3.97135 7.92969 3.69466 7.80273 3.4668 7.54883C3.24544 7.28841 3.13477 6.97917 3.13477 6.62109V4.63867C3.13477 4.56706 3.11198 4.50521 3.06641 4.45312C3.02083 4.40104 2.96549 4.375 2.90039 4.375C2.83529 4.375 2.77995 4.40104 2.73438 4.45312C2.6888 4.50521 2.66602 4.56706 2.66602 4.63867V8.45703L1.71875 9.18945V4.62891C1.71875 4.45312 1.74479 4.28711 1.79688 4.13086C1.85547 3.97461 1.9401 3.83464 2.05078 3.71094C2.16146 3.58724 2.28841 3.49284 2.43164 3.42773C2.57487 3.35612 2.72461 3.32031 2.88086 3.32031C3.20638 3.32031 3.48307 3.45052 3.71094 3.71094C3.9388 3.96484 4.05273 4.27083 4.05273 4.62891V6.61133C4.05273 6.68294 4.07227 6.74479 4.11133 6.79688C4.1569 6.84896 4.21549 6.875 4.28711 6.875C4.35221 6.875 4.40755 6.84896 4.45312 6.79688C4.4987 6.74479 4.52148 6.68294 4.52148 6.61133V4.62891C4.52148 4.27083 4.63542 3.96484 4.86328 3.71094C5.09115 3.45052 5.36458 3.32031 5.68359 3.32031C6.00911 3.32031 6.28255 3.45052 6.50391 3.71094C6.73177 3.96484 6.8457 4.27083 6.8457 4.62891V6.61133C6.8457 6.68294 6.86849 6.74479 6.91406 6.79688C6.95964 6.84896 7.01497 6.875 7.08008 6.875C7.15169 6.875 7.20703 6.84896 7.24609 6.79688C7.29167 6.74479 7.31445 6.68294 7.31445 6.61133V2.79297L8.25195 2.06055V6.62109H8.27148Z"
        fill="black"
      />
    </CustomSVG>
  );
};

export const WomanIcon = () => {
  return (
    <Box
      component="img"
      alt="profile"
      src={WomanIconimg}
      height="32px"
      width="32px"
      borderRadius="50%"
      sx={{ objectFit: "cover", mr: 1 }}
    ></Box>
  );
};

export const CardStaff = () => {
  return (
    <CustomSVG width="27" height="22" viewBox="0 0 27 22" fill="none">
      <path
        d="M26 20C26 20.5523 25.5523 21 25 21L5.82759 21C5.2753 21 4.82759 20.5523 4.82759 20L4.82759 15.579C4.82759 14.7097 4.45057 13.8832 3.79414 13.3134L1.65897 11.4601C1.15707 11.0244 1.21192 10.2294 1.7689 9.86682L3.46436 8.76304C4.3147 8.20945 4.82759 7.26355 4.82759 6.24889L4.82759 2C4.82759 1.44771 5.2753 0.999996 5.82759 0.999996L25 0.999998C25.5523 0.999998 26 1.44771 26 2L26 20Z"
        fill="#EDEDED"
        stroke="#EDEDED"
        stroke-width="2"
      />
    </CustomSVG>
  );
};