package Lambda.Practice;
@FunctionalInterface
public interface Operations<T> {
    T operate(T a, T b);
}
