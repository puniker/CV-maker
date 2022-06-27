import { UserGeneralDataModel } from "../models/UserGeneralDataModel";
import { UserStudiesDataModel } from "../models/UserStudiesDataModel";
import { UserWorkExperienceDataModel } from "../models/UserWorkExperienceDataModel";

export interface AllUserData {
    general: UserGeneralDataModel;
    studies: UserStudiesDataModel[];
    experience: UserWorkExperienceDataModel[];
}