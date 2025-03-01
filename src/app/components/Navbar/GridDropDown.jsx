import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function GridDropDown() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className=" rounded-md p-1 min-w-1 ">
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3075 15.2088C18.9004 15.2088 18.5518 15.0712 18.2619 14.7962C17.972 14.5211 17.827 14.1905 17.827 13.8042V3.97224C17.827 3.58598 17.972 3.25533 18.2619 2.98026C18.5518 2.7052 18.9004 2.56767 19.3075 2.56767H29.6709C30.0781 2.56767 30.4266 2.7052 30.7165 2.98026C31.0065 3.25533 31.1514 3.58598 31.1514 3.97224V13.8042C31.1514 14.1905 31.0065 14.5211 30.7165 14.7962C30.4266 15.0712 30.0781 15.2088 29.6709 15.2088H19.3075ZM19.3075 13.8042H29.6709V3.97224H19.3075V13.8042Z"
              fill="#1D1B20"
            />
            <path
              d="M19.3075 29.6559C18.9004 29.6559 18.5518 29.5184 18.2619 29.2433C17.972 28.9682 17.827 28.6376 17.827 28.2513V18.4194C17.827 18.0331 17.972 17.7024 18.2619 17.4274C18.5518 17.1523 18.9004 17.0148 19.3075 17.0148H29.6709C30.0781 17.0148 30.4266 17.1523 30.7165 17.4274C31.0065 17.7024 31.1514 18.0331 31.1514 18.4194V28.2513C31.1514 28.6376 31.0065 28.9682 30.7165 29.2433C30.4266 29.5184 30.0781 29.6559 29.6709 29.6559H19.3075ZM19.3075 28.2513H29.6709V18.4194H19.3075V28.2513Z"
              fill="#1D1B20"
            />
            <path
              d="M4.07973 15.2088C3.6726 15.2088 3.32407 15.0712 3.03414 14.7962C2.74421 14.5211 2.59924 14.1905 2.59924 13.8042V3.97224C2.59924 3.58598 2.74421 3.25533 3.03414 2.98026C3.32407 2.7052 3.6726 2.56767 4.07973 2.56767H14.4432C14.8503 2.56767 15.1988 2.7052 15.4888 2.98026C15.7787 3.25533 15.9236 3.58598 15.9236 3.97224V13.8042C15.9236 14.1905 15.7787 14.5211 15.4888 14.7962C15.1988 15.0712 14.8503 15.2088 14.4432 15.2088H4.07973ZM4.07973 13.8042H14.4432V3.97224H4.07973V13.8042Z"
              fill="#1D1B20"
            />
            <path
              d="M4.07973 29.6559C3.6726 29.6559 3.32407 29.5184 3.03414 29.2433C2.74421 28.9682 2.59924 28.6376 2.59924 28.2513V18.4194C2.59924 18.0331 2.74421 17.7024 3.03414 17.4274C3.32407 17.1523 3.6726 17.0148 4.07973 17.0148H14.4432C14.8503 17.0148 15.1988 17.1523 15.4888 17.4274C15.7787 17.7024 15.9236 18.0331 15.9236 18.4194V28.2513C15.9236 28.6376 15.7787 28.9682 15.4888 29.2433C15.1988 29.5184 14.8503 29.6559 14.4432 29.6559H4.07973ZM4.07973 28.2513H14.4432V18.4194H4.07973V28.2513Z"
              fill="#1D1B20"
            />
          </svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
