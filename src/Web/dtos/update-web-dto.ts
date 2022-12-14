import { PartialType } from "@nestjs/mapped-types";
import { WebDTO } from "./create-web-dto";

export class ModifyWebDto extends PartialType(WebDTO){
    nombre?: string;
    consumoCPU?: number;
    consumoRAM?: number;
    consumoGPU?: number;
    consumoHDD?: number;
    version?: number;
}