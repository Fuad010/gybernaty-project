import styled from "@emotion/styled";
import { Flex } from "shared/emotion-styles/Flex";
import { Button } from "shared/ui/button/ui/button";
import { Input } from "shared/ui/input";
import { SelectOption } from "shared/ui/select-option";
import { useUnit } from "effector-react";
import { $createProjectForm, setFormData, resetForm } from "entities/project/model/storage";
import { addProject } from "entities/project/model/storage";
import { v4 as uuidv4 } from "uuid";
import { IProject } from "entities/project/model/types";
import { useState } from "react";
import { CustomDatePicker } from "shared/ui/date-piker";

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > h4 {
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
  }
`;

const SuccessMessage = styled.div`
  padding: 10px;
  background-color: #28a745;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

const ErrorMessage = styled.div`
  padding: 10px;
  background-color: #dc3545;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
`;

export const CreateProjectForm = () => {
  const formData = useUnit($createProjectForm);
  const setFormDataFn = useUnit(setFormData);
  const resetFormFn = useUnit(resetForm);

  const [errors, setErrors] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof IProject, value: string | number | Date) => {
    setFormDataFn({ [field]: value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.lead) {
      newErrors.push("Lead is required.");
    }

    if (!formData.targetDate) {
      newErrors.push("Target Date is required.");
    }

    if (!formData.title) {
      newErrors.push("Title is required.");
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    
    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }

    addProject({ id: uuidv4(), ...formData } as IProject);
    resetFormFn();
    setIsSuccess(true);
    setErrors([]);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <Flex margin="18px 0 0 0" direction="column" width="100%" gap="15px">
        <StyledLabel>
            <h4>Title</h4>
            <Input 
            placeholder="Title"
            value={formData.title ?? ""}
            onChange={(e) => handleChange("title", e.target.value)}
            />
        </StyledLabel>
      <StyledLabel>
        <h4>Target Date</h4>
        <CustomDatePicker
            value={formData.targetDate ? formData.targetDate.toISOString().split('T')[0] : ""}
            onChange={(e) => handleChange("targetDate", new Date(e.target.value))}
        />
     </StyledLabel>

      <StyledLabel>
        <h4>Status</h4>
        <SelectOption 
          value={formData.status ?? ""}
          onChange={(e) => handleChange("status", e.target.value)}
          options={["TO DO", "IN PROGRESS", "DONE"]}
        />
      </StyledLabel>

      <StyledLabel>
        <h4>Priority</h4>
        <SelectOption 
          value={String(formData.priority ?? "")}
          onChange={(e) => handleChange("priority", Number(e.target.value))}
          options={["1", "2", "3"]}
        />
      </StyledLabel>

      <StyledLabel>
        <h4>Lead</h4>
        <Input 
          placeholder="Search assignee"
          value={formData.lead ?? ""}
          onChange={(e) => handleChange("lead", e.target.value)}
        />
      </StyledLabel>

      {errors.length > 0 && (
        <ErrorMessage>
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </ErrorMessage>
      )}

      <Flex justify="end" gap="15px" width="100%">
        <Button 
          fontSize="16px" 
          borderHave 
          width="79px"
          onClick={resetFormFn}
        >
          Clear
        </Button>
        <Button 
          fontSize="16px" 
          width="79px"
          onClick={handleSubmit}
        >
          Ok
        </Button>
      </Flex>

      {isSuccess && <SuccessMessage>Project successfully created!</SuccessMessage>}
    </Flex>
  );
};
