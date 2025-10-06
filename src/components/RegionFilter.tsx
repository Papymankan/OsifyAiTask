import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export function RegionFilter() {
  return (
    <Select>
      <SelectTrigger className="w-full p-3">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="americas">Americas</SelectItem>
        <SelectItem value="asia">Asia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}
