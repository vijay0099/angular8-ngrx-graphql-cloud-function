import { TestBed } from '@angular/core/testing';

import { KtDialogService } from './kt-dialog.service';

describe('KtDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KtDialogService = TestBed.get(KtDialogService);
    expect(service).toBeTruthy();
  });
});
