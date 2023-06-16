const CLEAN = 'clean';

export class CleanService {
    private bar = 'bar';

    public clean() {
        this.foo();
        return CLEAN;
    }

    public foo() {
        return () => {
            this.clean();
            return this.bar;
        };
    }
}
