import { LaravelModule } from './laravel.module';

describe('LaravelModule', () => {
  let laravelModule: LaravelModule;

  beforeEach(() => {
    laravelModule = new LaravelModule();
  });

  it('should create an instance', () => {
    expect(laravelModule).toBeTruthy();
  });
});
