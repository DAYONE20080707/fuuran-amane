const PlanList_03 = () => {
  const plans = [
    { name: "15分鑑定", price: "3,300" },
    { name: "30分鑑定", price: "5,500" },
    { name: "60分鑑定", price: "11,000" },
  ];

  return (
    <div className="mt-10 md:mt-10">
      <div className="w-full">
        {plans.map((plan, index) => (
          <div key={index} className="border-b border-borderGray py-4">
            <div className="flex justify-between items-center">
              <span className="text-base md:text-[22px] tracking-[0.03em]">
                {plan.name}
              </span>
              <p>
                <span className="text-sm md:text-lg tracking-[0.03em] leading-[180%]">¥</span>
                <span className="font-en text-base md:text-[32px] tracking-[0.03em] leading-[180%]">
                  {plan.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-6 text-[15px] gap-y-2 leading-[180%]">
        <li className="mb-2 flex">
          <span>※</span>
          <span>価格はすべて税込みです。</span>
        </li>
        <li className="mb-2 flex">
          <span>※</span>
          <span>お時間の延長は行っておりませんのでご了承くださいませ。</span>
        </li>
        <li className="mb-2 flex">
          <span>※</span>
          <span>
            キャッシュレス決済等は現在対応しておりませんので現金でのお支払いでお願いいたします。
            <br />
            （オンライン占いをご希望のお客様はPayPay前払いでのお支払いになりますので、ご予約前にDMにてご相談ください）
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PlanList_03;
