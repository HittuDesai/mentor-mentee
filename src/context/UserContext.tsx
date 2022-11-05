import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { createContext, useState } from "react";

type UserContextType = {
	userID: String;
	updateUserID: (newUserID: string) => void;
};

export const UserContext = createContext<UserContextType>({
	userID: "",
	updateUserID: () => {},
});
export const UserContextProvider = ({
	children,
}: {
	children: ReactJSXElement;
}) => {
	const [userID, setUserID] = useState<string>("");
	const updateUserID = (newUserID: string) => {
		setUserID(newUserID);
	};
	return (
		<UserContext.Provider value={{ userID, updateUserID }}>
			{children}
		</UserContext.Provider>
	);
};
