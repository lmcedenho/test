<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::put('/user/create', [
    'as' => 'user.create',
    'uses' => 'UserApiController@addUser'
]);

Route::post('/user/activate', [
    'as' => 'user.activate',
    'uses' => 'UserApiController@activateUser'
]);

Route::post('/user/desactivate', [
    'as' => 'user.desactivate',
    'uses' => 'UserApiController@desactivateUser'
]);

Route::get('/user/get/{username}', [
    'as' => 'user.get',
    'uses' => 'UserApiController@getUser'
]);
