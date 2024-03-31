

export function basic_ode(x0, k, dt = 0.01, nsteps = 100) {
    let sol = Array(nsteps).fill(0);
    // let t_array = Array(nsteps).fill(0).map((x, i) => i * dt);

    sol[0] = [0,x0];

    for (let i = 1; i < nsteps; i++) {
        sol[i] = [dt*i, sol[i - 1][1] + k * sol[i-1][1] * dt];
    };

    return sol;
}