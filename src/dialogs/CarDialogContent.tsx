import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Car } from "../types/types";

type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CarDialogContent({ car, handleChange }: DialogFormProps) {
  return (
    <>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="Brand"
            name="brand"
            value={car.brand}
            onChange={handleChange}
          />
          <TextField
            label="Model"
            name="model"
            value={car.model}
            onChange={handleChange}
          />
          <TextField
            label="Color"
            name="color"
            value={car.color}
            onChange={handleChange}
          />
          <TextField
            label="Fuel Type"
            name="fuel"
            value={car.fuel}
            onChange={handleChange}
          />
          <TextField
            label="Model Year"
            name="year"
            value={car.year}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="price"
            value={car.price}
            onChange={handleChange}
          />
        </Stack>
      </DialogContent>
    </>
  );
}
export default CarDialogContent;
