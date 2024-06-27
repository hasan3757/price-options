import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const PriceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "features": [
        "Access to gym during staffed hours",
        "Use of cardio and strength equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Access to gym app for workout tracking"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": 49.99,
      "features": [
        "24/7 gym access",
        "Use of cardio and strength equipment",
        "Locker room access",
        "Group fitness classes",
        "Free Wi-Fi",
        "Access to gym app for workout tracking",
        "One free fitness assessment per year"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price": 69.99,
      "features": [
        "24/7 gym access",
        "Use of cardio and strength equipment",
        "Locker room access",
        "Group fitness classes",
        "Personal training sessions (2 per month)",
        "Access to premium equipment",
        "Free Wi-Fi",
        "Access to gym app for workout tracking",
        "One free fitness assessment per year",
        "Nutrition consultation (1 per month)"
      ]
    }
  ];


  return (
    <div className="m-12">
      <h2 className="text-5xl">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {
          PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;