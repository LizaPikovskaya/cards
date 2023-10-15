import { CheckIcon, Select, SelectWrapper } from "./Dropdown.styled";
import sprite from "../../../accets/images/sprite.svg";
export const Dropdown = ({ handleOptionChange, value }) => {
  return (
    <SelectWrapper>
      <Select name="filter" onChange={handleOptionChange} value={value}>
        <option value="" disabled hidden>
          Choose to filter
        </option>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>
      <CheckIcon width={20} height={20}>
        <use href={`${sprite}#icon-chevron-thin-down`}></use>
      </CheckIcon>
    </SelectWrapper>
  );
};
