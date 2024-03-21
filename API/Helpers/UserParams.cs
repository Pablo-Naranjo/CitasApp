namespace API.Helpers;
public class UserParams
{
    private const int _maxPageSize = 50;
    public int pageNumber = 1;
    private int _pageSize = 10;
    public int MyProperty
    {
        get => _pageSize;
        set => _pageSize = (value > _maxPageSize) ? _maxPageSize : value;
    }
}