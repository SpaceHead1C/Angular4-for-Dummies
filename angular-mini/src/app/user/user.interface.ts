export interface RandomUsers { // define an interface with the correct shape
    results: [
        {
            name: {
                title: string;
                first: string;
                last: string;
            };
            picture: {
                large: string;
            };
            location: {
                city: string;
                state: string;
                street: string;
            };
        }
    ];
}