import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adopted: Pet) => void]>([
  {
    id: 0,
    name: "Fido",
    animal: "dog",
    description: "A good dog",
    breed: "Labrador",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
