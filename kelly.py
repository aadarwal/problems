import numpy as np

rng = np.random.default_rng(2024)

def k_array_with_t_true(k: int, t: int):
    """Create a length-k boolean array with t-True values"""
    is_true = np.array([False] * k, dtype=bool)
    is_true[rng.choice(k, size=t, replace=False)] = True
    return is_true

def run_bets(is_red) -> float:
    """Run the Kelly betting strategy"""
    stake = 1.0
    n_red_remaining = int(np.sum(is_red))
    n_black_remaining = len(is_red) - n_red_remaining
    for i in range(len(is_red)):
        bet_red = 0
        bet_black = 0
        fraction = np.abs(n_red_remaining - n_black_remaining) / (n_red_remaining + n_black_remaining)
        if n_red_remaining > n_black_remaining:
            bet_red = stake * fraction
        elif n_black_remaining > n_red_remaining:
            bet_black = stake * fraction
        stake = stake - (bet_red + bet_black)
        if is_red[i]:
            stake = stake + 2 * bet_red
            n_red_remaining = n_red_remaining - 1
        else:
            stake = stake + 2 * bet_black
            n_black_remaining = n_black_remaining - 1
    return stake

payoffs = [
    run_bets(k_array_with_t_true(52, 26)) for _ in range(10000)
]
assert np.max(payoffs) - 1e-8 < np.min(payoffs)

print((np.min(payoffs), np.max(payoffs)))
