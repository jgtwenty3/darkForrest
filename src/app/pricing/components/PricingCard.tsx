import React from 'react';

type PricingCardProps = {
  title: string;
  listItems: { item: string; included: boolean }[];
  price: string;
  buttonLabel: string;
  buttonLink: string;
};

export default function PricingCard({ title, listItems, price, buttonLabel, buttonLink }: PricingCardProps) {
  return (
    <div className="p-4 border-dashed border-2 border-foreground max-w-sm bg-background flex flex-col justify-between">
      <div>
        <h2 className="text-4xl font-bold mb-2 text-center">{title}</h2>
        <ul className="mb-4">
          {listItems.map((listItem, index) => (
            <li key={index} className="flex justify-between py-1 text-2xl">
              <span className={listItem.included ? "text-foreground" : "text-foreground"}>{listItem.item}</span>
              <span className={listItem.included ? "text-foreground" : "text-foreground"}>{listItem.included ? "✔" : "✘"}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="text-3xl font-bold mb-4 text-center">{price}</div>
        <a href={buttonLink} className="block text-center py-2 text-background uppercase bg-foreground hover:bg-background hover:text-foreground border-2 border-foreground text-2xl">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
