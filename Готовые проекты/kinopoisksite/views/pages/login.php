<?php $view->component('start') ?>
<h1>LOGIN</h1>
<form action="/login" method="post">
    <?php if ($session->has('error')) { ?>
        <p style="color: red">
            <?php echo $session->getFlash('error') ?>
        </p>
    <?php } ?>

    <p>Email:</p>
    <input type="text" name="email">

    <p>Password</p>
    <input type="password" name="password">

    <div>
        <button>Login</button>
    </div>
</form>
<?php $view->component('end') ?>