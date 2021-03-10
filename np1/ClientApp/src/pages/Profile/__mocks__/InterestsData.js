import { DropdownMenuItemType } from "office-ui-fabric-react";

export const InterestsData = [
  { key: "Header", text: "Options", itemType: DropdownMenuItemType.Header },
  { key: "A", text: "Option a", data: { icon: "Memo" } },
  { key: "B", text: "IT Proffessionals", data: { icon: "Telemarketer" } },
  { key: "C", text: "Option c", data: { icon: "ShoppingCart" } },
  { key: "D", text: "Doctors", data: { icon: "Medical" } },
  { key: "E", text: "Option e", data: { icon: "Repair" } },
  { key: "divider_2", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "Header2",
    text: "More options",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "F", text: "Option f", data: { icon: "Running" } },
  { key: "G", text: "Hospitals", data: { icon: "Hospital" } },
  { key: "H", text: "Hotels", data: { icon: "Hotel" } },
  { key: "I", text: "Option i", data: { icon: "SecurityGroup" } },
  { key: "J", text: "Option j", data: { icon: "AddGroup" } },
];
