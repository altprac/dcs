interface ICb {
    (error: Error, response?: object): void;
    (error: null, response: object): void;
}
