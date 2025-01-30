import { Flex } from "shared/emotion-styles/Flex"
import { SearchInput } from "shared/ui/search-input"
import { Button } from "shared/ui/button/ui/button"
import { FilterButton } from "shared/ui/filter-button"

export const Filter = () => {
    return (
        <>
            <Flex margin="20px 0 0 0" justify="space-between" width="100%">
                <Flex gap="20px"    >
                    <Flex width="335px">
                        <SearchInput/>
                    </Flex>
                    <Button isBold fontSize={"16px"} children={"Me"} hoverDisable/>
                    <FilterButton isDropdown fontSize={"15px"} children={"Status"}/>
                    <FilterButton isDropdown fontSize={"15px"} children={"Priority"}/>
                    <FilterButton isDropdown fontSize={"15px"} children={"Lead"}/>
                </Flex>
                <Flex gap="20px">
                    <Button fontSize={"16px"} borderHave children={"Clear"}/>
                    <Button fontSize={"16px"} children={"Apply"} />
                </Flex>
            </Flex>
            <Flex margin="20px 0 0 0" gap="20px">
                <FilterButton fontSize={"15px"} isDropdown={false} children={"TO DO"}/>
                <FilterButton fontSize={"15px"} isDropdown={false} children={"Medium"}/>
                <FilterButton fontSize={"15px"} isDropdown={false} children={"Maksim K"}/>
            </Flex>
        </>
    )
}