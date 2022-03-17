import * as React from 'react'
import {Autocomplete, Stack, TextField} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import {searchOnLastName} from "../../../../../Redux/action/contacts-action";

const SearchContact = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.contactsPage.filterUsers);
    const searchFirstName = (event) =>  {
        const input_last_name = event.target.value
        dispatch(searchOnLastName(input_last_name))
    }
    return (
        <Stack spacing={2} sx={{ width: 300, padding: 1 }} >
            <Autocomplete
                id="free-solo-demo"
                freeSolo

                options={users.map((option) => option.last_name )}
                renderInput={(params) => <TextField {...params}
                                                    onChange={searchFirstName}
                                                    onSelect={searchFirstName}
                                                    label="Поиск по фамилии" />}
            />
        </Stack>
    )

}

export default SearchContact;