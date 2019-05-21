import { TestBed } from '@angular/core/testing';

import { BookDashboardService } from './book-dashboard.service';

describe('BookDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDashboardService = TestBed.get(BookDashboardService);
    expect(service).toBeTruthy();
  });
});
