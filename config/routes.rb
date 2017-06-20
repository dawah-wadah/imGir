Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user
  end

  root "static_pages#root"
end
