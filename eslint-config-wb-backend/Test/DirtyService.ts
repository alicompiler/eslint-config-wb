const CLEAN: string = 'clean';

export class DirtyService {
    public dirty() {
      return CLEAN;
    }

    public foo() {return function() {
            return 'bar'
        };
    }
}
