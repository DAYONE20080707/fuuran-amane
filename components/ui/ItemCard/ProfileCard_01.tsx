// components/ui/itemCard/ProfileCard_01.tsx

import React from "react";

interface ProfileCard_01Props {
  label: string;
  value: string;
}

const ProfileCard_01 = ({ label, value }: ProfileCard_01Props) => {
  return (
    <dl className="text-base md:text-lg grid md:grid-cols-[150px_auto] gap-x-2 md:border-b md:border-borderGray">
      <dt className="flex items-baseline py-2 md:py-4 leading-[180%]">
        {label}
      </dt>
      <dd className="flex items-center pb-4 md:py-4 whitespace-pre-line leading-[180%]">
        {value}
      </dd>
    </dl>
  );
};

export default ProfileCard_01;
